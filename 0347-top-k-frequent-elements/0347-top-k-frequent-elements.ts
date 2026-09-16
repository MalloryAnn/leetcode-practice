function topKFrequent(nums: number[], k: number): number[] {
    const count = new Map<number, number>();
    for (const num of nums){
        count.set(num, (count.get(num)|| 0) +1);

    }
    const entries = Array.from(count.entries());
    entries.sort((a,b) => b[1] - a[1]);
    return entries.slice(0,k).map(entry => entry[0]);
};