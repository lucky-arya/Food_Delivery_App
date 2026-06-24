import { CreateUserParams, SignInParams, User } from "@/type";
import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite";
import "react-native-url-polyfill/auto";


export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    platform: "com.shivam.foodordering",
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    databaseId: process.env.EXPO_PUBLIC_DATABASE_ID!,
    userCollectionId: process.env.EXPO_PUBLIC_USER_COLLECTION_ID!,
}



export const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)

export const database = new Databases(client);
export const account = new Account(client);
export const avatar = new Avatars(client);

export const creatUser = async ({ email, password, name }: CreateUserParams) => {
    try {
        const newAccount = await account.create(ID.unique(), email.trim(), password, name);
        if (!newAccount) throw Error;

        await Sign_In({ email, password });

        const avatarUrl = `${appwriteConfig.endpoint}/avatars/initials?name=${encodeURIComponent(name)}&project=${appwriteConfig.projectId}`;

        return await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            newAccount.$id,
            {
                accountId: newAccount.$id,
                email,
                name,
                avatar: avatarUrl
            }
        )


    } catch (error) {
        throw new Error(error as string);
    }
}

export const Sign_In = async ({ email, password }: SignInParams) => {
    try {
        // Clear any existing active session to prevent session conflicts
        try {
            await account.deleteSession("current");
        } catch {
            // Ignore if no session exists
        }

        const newSession = await account.createEmailPasswordSession({
            email: email.trim(),
            password
        });

        return newSession;

    } catch (error) {
        throw new Error(error as string);
    }
}
export const getCurrentUser = async (): Promise<User | null> => {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error;

        try {
            // Attempt direct lookup (fast, works for all new signups using account ID as document ID)
            const user = await database.getDocument(
                appwriteConfig.databaseId,
                appwriteConfig.userCollectionId,
                currentAccount.$id
            );
            return user as unknown as User;
        } catch (getDocumentError) {
            // Fallback: Query by accountId attribute (works for old users created with ID.unique())
            const users = await database.listDocuments(
                appwriteConfig.databaseId,
                appwriteConfig.userCollectionId,
                [Query.equal("accountId", currentAccount.$id)]
            );
            if (users.documents.length > 0) {
                return users.documents[0] as unknown as User;
            }
            throw getDocumentError;
        }
    } catch (error) {
        throw new Error(error as string);
    }
};


