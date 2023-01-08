import { Title } from "@mantine/core";
import { unstable_getServerSession } from "next-auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next/types";
import Layout from "../../components/layouts/Layout";
import { trpc } from "../../utils/trpc";
import { authOptions } from "../api/auth/[...nextauth]";

const homeId = () => {
  const router = useRouter();

  const { homeId } = router.query;

  const { data, isLoading } = trpc.home.getHomesById.useQuery({
    homeId: homeId as string,
  });

  return (
    <>
      <Layout>
        <section>
          <Title>See berge</Title>
          <span>4,99 </span>
          <Link href={"/"} className="font-bold underline ">
            {data?.city + ", " + data?.country}
          </Link>
        </section>
        <section className="p-8">
          <img
            className="h-96 w-full object-cover"
            src={data?.image}
            alt="home"
          />
        </section>

        <section>description and reservation form</section>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default homeId;
