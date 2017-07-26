export interface Delta {
    [type: string]: {
        [id: string]: {
            [field: string]: any
        }
    }
}
