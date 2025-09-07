export const storage = {
    async get(key: string):Promise<string | null> {
        // TODO
        return Promise.resolve('')
    },
    async set(key: string, value:string): Promise<void> {},
    async remove(key:string): Promise<void> {},
    async clear(): Promise<void> {}
}