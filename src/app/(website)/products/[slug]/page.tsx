import ProductPage from "./ProductPage";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <ProductPage params={params} />
    </div>
  );
}
