import { Category } from "@/type";
import cn from "clsx";
import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Platform, Text, TouchableOpacity } from 'react-native';

const Filter = ({ categories }: { categories: Category[] }) => {
    const searchParams = useLocalSearchParams();
    const active = (searchParams.category || 'all').toString();

    const handlePress = (id: string | number) => {
        const idStr = id.toString();

        if (idStr === 'all') router.setParams({ category: undefined });
        else router.setParams({ category: idStr });
    };

    const filterData = categories
        ? [{ id: 'all', name: 'All' } as any, ...categories]
        : [{ id: 'all', name: 'All' } as any];

    return (
        <FlatList
            data={filterData}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-x-2 pb-3"
            renderItem={({ item }) => {
                const itemIdStr = item.id.toString();
                return (
                    <TouchableOpacity
                        key={itemIdStr}
                        className={cn('filter', active === itemIdStr ? 'bg-amber-500' : 'bg-white')}
                        style={Platform.OS === 'android' ? { elevation: 5, shadowColor: '#878787' } : {}}
                        onPress={() => handlePress(itemIdStr)}
                    >
                        <Text className={cn('body-medium', active === itemIdStr ? 'text-white' : 'text-gray-200')}>{item.name}</Text>
                    </TouchableOpacity>
                );
            }}
        />
    )
}
export default Filter