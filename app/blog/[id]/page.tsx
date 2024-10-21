import { DetailBlogCard } from "@/modules/Blog/BlogDetail/Components/blog-detail";

export default function BlogDetail({
  params,
}: Readonly<{ params: { id: string } }>) {
  const { id } = params;

  return <DetailBlogCard id={id} />;
}
