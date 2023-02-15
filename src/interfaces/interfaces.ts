export interface selectVariant {
    idvariant: number
    option: number[]
    select: number[]
    price: number
}
export interface orderItems{
    title: string
    variants: orderVariant[]
}
export interface orderVariant {
    title: string
    description: string
    color: string
    price_default: number
    options: option[]
    select: select[]
}
export interface option {
    title: string
    price: number
}
export interface select {
    title: string
    items: option[]
}