export type Maybe<T> = T | undefined | null
export type PartialSome<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
export type DeepRequired<T> = {
    [P in keyof T]-?: T[P] extends (infer U)[] ? DeepRequired<U>[] : T[P] extends object ? DeepRequired<T[P]> : T[P]
}

export type Children = React.ReactNode
export type ChildrenProps = {
    children?: Children
}