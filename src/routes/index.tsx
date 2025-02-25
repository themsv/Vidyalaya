import { createFileRoute } from "@tanstack/react-router";
import {
  Group,
  Card,
  Text,
  Container,
  Stack,
  Title,
  Button,
  Grid,
  rem,
  Image,
  List,
  Box,
  Anchor,
} from "@mantine/core";
import {
  IconBook,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconClock,
  IconMap,
  IconSchool,
  IconTrophy,
  IconUsers,
} from "@tabler/icons-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Box
        style={{
          background:
            'linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.9)), url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
        }}
      >
        <Container>
          <Stack gap="xl">
            <Title order={1} size="h1">
              Welcome to ABC International School
            </Title>
            <Text size="xl" maw={600}>
              Empowering minds, shaping futures, and nurturing excellence in
              education since 1995
            </Text>
            <Group>
              <Button size="lg" color="red">
                Apply Now
              </Button>
              i
              <Button size="lg" variant="outline" color="gray">
                Learn More
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container size="lg" py={80}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" padding="lg">
              <IconSchool
                size={40}
                color="#E74C3C"
                style={{ marginBottom: rem(20) }}
              />
              <Title order={3} mb="md">
                Academic Excellence
              </Title>
              <Text>
                Consistently ranked among top schools with exceptional academic
                achievements and university placements.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" padding="lg">
              <IconUsers
                size={40}
                color="#E74C3C"
                style={{ marginBottom: rem(20) }}
              />
              <Title order={3} mb="md">
                Expert Faculty
              </Title>
              <Text>
                Dedicated teachers with international experience fostering a
                dynamic learning environment.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" padding="lg">
              <IconTrophy
                size={40}
                color="#E74C3C"
                style={{ marginBottom: rem(20) }}
              />
              <Title order={3} mb="md">
                Holistic Development
              </Title>
              <Text>
                Focus on academics, sports, arts, and character building for
                well-rounded growth.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>

      {/* About Section */}
      <Box style={{ background: "#f8f9fa", padding: "80px 0" }}>
        <Container size="lg">
          <Grid gutter={60}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image
                radius="md"
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="School campus"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} mb="xl">
                Why Choose Vidya International?
              </Title>
              <List size="lg" spacing="md">
                <List.Item icon={<IconBook size={24} color="#E74C3C" />}>
                  International curriculum with CBSE and Cambridge programs
                </List.Item>
                <List.Item icon={<IconUsers size={24} color="#E74C3C" />}>
                  Small class sizes ensuring personalized attention
                </List.Item>
                <List.Item icon={<IconClock size={24} color="#E74C3C" />}>
                  Modern facilities and state-of-the-art infrastructure
                </List.Item>
                <List.Item icon={<IconMap size={24} color="#E74C3C" />}>
                  Conveniently located in the heart of the city
                </List.Item>
              </List>
              <Button size="lg" color="red" mt="xl">
                Schedule a Visit
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
      <Group justify="space-around" p="md">
        <Stack gap={"xs"}>
          <Title order={4}>Contact Us</Title>
          <Text>123 Education Street</Text>
          <Text>New Delhi, India 110001</Text>
          <Text>Phone: +91 11 2345 6789</Text>
          <Text>Email: info@vidyainternational.edu</Text>
        </Stack>
        <Stack gap={"xs"}>
          <Title order={4}>Quick Links</Title>
          <Text>Admissions</Text>
          <Text>Academics</Text>
          <Text>Campus Life</Text>
          <Text>News & Events</Text>
        </Stack>
        <Stack gap={"xs"}>
          <Title order={4}>Follow Us</Title>
          <Anchor variant="gradient">
            <Group gap="xs">
              <IconBrandFacebook />
              Facebook
            </Group>
          </Anchor>
          <Anchor variant="gradient">
            <Group>
              <IconBrandX />
              X(Twitter)
            </Group>
          </Anchor>
          <Anchor variant="gradient">
            <Group>
              <IconBrandInstagram />
              Instagram
            </Group>
          </Anchor>
          <Anchor variant="gradient">
            <Group>
              <IconBrandYoutube />
              Youtube
            </Group>
          </Anchor>
        </Stack>
      </Group>
    </>
  );
}
