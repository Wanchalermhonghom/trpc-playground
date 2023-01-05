import { useRouter } from "next/router";

const homeId = () => {
  const router = useRouter();
  const { homeId } = router.query;
  return <div>fetch some with {homeId}</div>;
};

export default homeId;
