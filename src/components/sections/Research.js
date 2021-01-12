import React from 'react';
import {
  Flex,
  Heading,
  Stack,
  UnorderedList,
  ListItem,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';

export default function Research() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        align="left"
        justify="left"
        wrap="no-wrap"
        mt={5}
        px={8}
        id="history"
      >
        <Stack spacing={4} align="left" p={20}>
          {/* History */}
          <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            color="primary.800"
            // eslint-disable-next-line
            color={
              colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
            }
            textAlign={'left'}
            id="history"
          >
            History{' '}
            <Link
              to={'history'}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1500}
              style={{ cursor: 'pointer' }}
            >
              <span style={{ color: '#319795' }}>#</span>
            </Link>
          </Heading>
          <Heading
            as="h2"
            size="md"
            // eslint-disable-next-line
            color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign="left"
          >
            By the mid-20th century Nunavut was mostly a Inuit region, they had
            replaced their semi nomadic hunting, fishing, and trapping lifestyle
            with a more modern style of living in settled communities, where
            dependence on government welfare support became the norm. Nutrition
            and health care improved, but there also were serious social
            problems related to alcohol and other substance abuse, unemployment,
            and crime. Dissatisfaction with those conditions and the wish to
            participate more directly in the processes of resource development
            led the Inuit to exert pressure on the federal and territorial
            governments to grant them greater control over the administration of
            their own affairs. In the mid-1970s the Inuit began negotiations to
            settle land claims and proposed the creation of a separate Inuit
            territory. A plebiscite in the Northwest Territories in 1992
            approved the division of the territories. With that mandate, the
            Inuit and representatives of the federal government reached an
            agreement that produced two acts of the Canadian Parliament in 1993.
            The first, the Nunavut Land Claims Agreement Act, settled Inuit land
            claims against the government by giving the Inuit outright control
            of more than 135,000 square miles (350,000 square km) of territory
            and providing cash payments from the federal government over a
            14-year period; the second, the Nunavut Act, established the
            territory of Nunavut out of the eastern portion of the Northwest
            Territories. Following a transitional period, Nunavut came into
            being on April 1, 1999.
          </Heading>
          {/* Economy */}
          <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            color="primary.800"
            // eslint-disable-next-line
            color={
              colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
            }
            textAlign={'left'}
            id="economy"
          >
            Economy{' '}
            <Link
              to={'economy'}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1500}
              style={{ cursor: 'pointer' }}
            >
              <span style={{ color: '#319795' }}>#</span>
            </Link>
          </Heading>
          <Heading
            as="h2"
            size="md"
            // eslint-disable-next-line
            color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign="left"
          >
            Nunavut’s Gross Domestic Product (GDP) was $1.75 billion in 2010
            (Statistics Canada) an increase of 11.4 per cent. Conference Board
            of Canada forecasts that Nunavut’s economy will continue to grow at
            an average rate of 9.2 per cent over the next five years. Government
            expenditures made up the largest portion of GDP at 71 per cent.
            However, with a growing resource and fisheries sectors, exports are
            quickly becoming a more significant portion of the economy. In 2010,
            exports of all goods and services grew 147 per cent from $222
            million in 2009 to $555 million in 2010.
          </Heading>
          {/* People */}
          <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            color="primary.800"
            // eslint-disable-next-line
            color={
              colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
            }
            textAlign={'left'}
            id="people"
          >
            People{' '}
            <Link
              to={'people'}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1500}
              style={{ cursor: 'pointer' }}
            >
              <span style={{ color: '#319795' }}>#</span>
            </Link>
          </Heading>
          <Heading
            as="h2"
            size="md"
            // eslint-disable-next-line
            color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign="left"
          >
            The majority of people in Nunavut are Inuit. Traditional Inuit
            religious practices include animism and shamanism, in which
            spiritual healers mediate with spirits. Today many Inuit follow
            Christianity, but traditional Inuit spirituality continues as part
            of a living, oral tradition and part of contemporary Inuit society.
            Nunavut’s vast size and harsh climate enabled its sparse Inuit
            population to preserve their traditional nomadic lifestyle as
            hunters and fishers for centuries after Europeans settled in
            southern Canada. Nunavut’s Inuit have also managed to maintain their
            intricate carving skills, unique music, and Inuktitut language, the
            mother tongue of about 65 percent of Nunavut’s population.
          </Heading>
          {/* Climate */}
          <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            color="primary.800"
            // eslint-disable-next-line
            color={
              colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
            }
            textAlign={'left'}
            id="climate"
          >
            Climate{' '}
            <Link
              to={'climate'}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1500}
              style={{ cursor: 'pointer' }}
            >
              <span style={{ color: '#319795' }}>#</span>
            </Link>
          </Heading>
          <Heading
            as="h2"
            size="md"
            // eslint-disable-next-line
            color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign="left"
          >
            The territory lies entirely within the Arctic climatic zone, with
            bitterly cold winters and cool to cold summers. Average daily
            January temperatures rise above −22 °F (−30 °C) only in the eastern
            coastal areas, and in the far north and northwest of Hudson Bay they
            reach only −31 °F (−35 °C) while in the far north and along the
            northeastern coast of Baffin Island they do not exceed 41 °F (5 °C).
          </Heading>
          {/* Cities */}
          <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            color="primary.800"
            // eslint-disable-next-line
            color={
              colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
            }
            textAlign={'left'}
            id="cities"
          >
            Cities{' '}
            <Link
              to={'cities'}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1500}
              style={{ cursor: 'pointer' }}
            >
              <span style={{ color: '#319795' }}>#</span>
            </Link>
          </Heading>
          <Heading
            as="h2"
            size="md"
            // eslint-disable-next-line
            color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign="left"
          >
            Nunavut does not have any ‘major’ cities however its biggest two are
            Iqaluit which is located on Baffin Island with a population of about
            7,500 people and Arviat which has a population of 2,650 people.
            Nunavut’s other residents are spread across 24 communities.{' '}
          </Heading>
          {/* Attractions */}
          <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            color="primary.800"
            // eslint-disable-next-line
            color={
              colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
            }
            textAlign={'left'}
            id="attractions"
          >
            Attractions{' '}
            <Link
              to={'attractions'}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1500}
              style={{ cursor: 'pointer' }}
            >
              <span style={{ color: '#319795' }}>#</span>
            </Link>
          </Heading>
          <Heading
            as="h2"
            size="md"
            // eslint-disable-next-line
            color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign="left"
          >
            The most popular tourist attraction in Nunavut is baffin island.
            With its breathtaking landscape, the hospitality of the Inuit
            people, and the numerous opportunities for an unusual holiday,
            Baffin Island is a strong draw for tourists. Some of the top sights
            in Baffin island include Thor Peak, Mount Asgard and Akshayuk Pass.
            Each of these sights have a beautiful scene with different
            activities such as hiking, camping and sightseeing
          </Heading>
          {/* Government */}
          <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            color="primary.800"
            // eslint-disable-next-line
            color={
              colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
            }
            textAlign={'left'}
            id="government"
          >
            Government{' '}
            <Link
              to={'government'}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1500}
              style={{ cursor: 'pointer' }}
            >
              <span style={{ color: '#319795' }}>#</span>
            </Link>
          </Heading>
          <Heading
            as="h2"
            size="md"
            // eslint-disable-next-line
            color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign="left"
          >
            The current premier of nunavut is Joe Savikataaq.
          </Heading>
          <Heading
            as="h2"
            size="md"
            // eslint-disable-next-line
            color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign="left"
          >
            Cabinet members include:
            <UnorderedList>
              <ListItem>Joe Savikataaq, Premier of Nunavut</ListItem>
              <ListItem>David Akeeagok, Deputy Premier</ListItem>
              <ListItem>Elisapee Sheutiapik</ListItem>
              <ListItem>Jeannie Ehaloak</ListItem>
              <ListItem>George Hickes</ListItem>
              <ListItem>David Joanasie</ListItem>
              <ListItem>Lorne Kusugak</ListItem>
              <ListItem>Margaret Nakashuk</ListItem>
            </UnorderedList>
          </Heading>
          {/* Landforms */}
          <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            color="primary.800"
            // eslint-disable-next-line
            color={
              colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
            }
            textAlign={'left'}
            id="landforms"
          >
            Landforms{' '}
            <Link
              to={'landforms'}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1500}
              style={{ cursor: 'pointer' }}
            >
              <span style={{ color: '#319795' }}>#</span>
            </Link>
          </Heading>
          <Heading
            as="h2"
            size="md"
            // eslint-disable-next-line
            color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign="left"
          >
            Nunavut comprises two distinct physiographic regions: the Canadian
            Shield, including the mainland and the islands around Hudson Bay,
            and the Arctic Archipelago in the north. The flat, often poorly
            drained lowlands of the Canadian Shield are underlain with ancient
            rock more than 1 billion years old. Much of the land in Nunavut is
            characterized as tundra, which is bare, rocky, treeless and covered
            in permafrost.
          </Heading>
        </Stack>
      </Flex>
    </>
  );
}
