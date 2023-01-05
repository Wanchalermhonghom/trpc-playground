import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { useRouter } from "next/router";

type HomeCardProps = {
  id?: string;
  city?: string;
  country?: string;
  image?: string;
  price?: number;
};

const HomeCard = ({id,  city, country, image, price }: HomeCardProps) => {

  const router = useRouter();
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={image} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{city + " " + country}</Text>
        <Badge color="pink" variant="light">
          {price}
        </Badge>
      </Group>



      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => router.push(`/home/${id}`) }>
        See more
      </Button>
    </Card>
  );
};

export default HomeCard;
