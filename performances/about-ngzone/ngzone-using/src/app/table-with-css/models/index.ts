export type ProductType = {
  id: number,
  title: string,
  description?: string
}

export type ProductTypeForView = ProductType & {
  added?: boolean
}
