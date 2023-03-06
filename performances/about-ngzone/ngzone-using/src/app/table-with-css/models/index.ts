export type ProductType = {
  id: number,
  title: string
}

export type ProductTypeForView = ProductType & {
  added?: boolean
}
