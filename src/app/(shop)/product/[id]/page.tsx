import ProductView from "@/View/product";

interface Props {
    params: {
        id: string;
    }
}

export default function Product({ params }: Props) {

    const { id } = params;

    return <ProductView idUser={id} />
}
