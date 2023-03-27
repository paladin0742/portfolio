import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vdscnft from "../../Assets/Projects/vdscnft.png";
import voltichange from "../../Assets/Projects/voltichange.png";
import trillernfts from "../../Assets/Projects/trillernfts.png";
import healthysportindex from "../../Assets/Projects/healthysportindex.png";
import choicehotels from "../../Assets/Projects/choicehotels.png";
import myself from "../../Assets/Projects/myself.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vdscnft}
              isBlog={false}
              title="VDSC NFT"
              description="By minting a Volted Dragons Sailors Club, you will have your dragon randomly generated and a unique one of a kind. You may end up being the most legendary dragon of them all! The price is the same for everyone to mint."
              demoLink="https://volteddragons.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voltichange}
              isBlog={false}
              title="Volt Exchange"
              description="exchange platform for ETH and BSC network with Volt token and several stable tokens. You can get a giant profit from volt token. Please, connect your wallet to view your favorite trades."
              demoLink="https://voltichange.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trillernfts}
              isBlog={false}
              title="NFT Marketplace"
              description="Web3 ownership, engagement & utility tools. Easily create and sell NFTs. No coding required, setup in 5 minutes. With a few clicks, deploy smart contracts on Ethereum, Polygon, Avalanche, Solana and more, with support for ERC721, ERC721A, ERC1155, NTTs, royalties and more."
              demoLink="https://www.trillernfts.com"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthysportindex}
              isBlog={false}
              title="Healthy Sport Index"
              description="Find The Best Sport For You. The Healthy Sport Index is the world’s first-ever tool that assesses the relative benefits and risks of participating in the most popular sports for adolescents. Learn about each sport, and customize the index by adjusting the dial below based on your health criteria."
              demoLink="https://healthysportindex.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={choicehotels}
              isBlog={false}
              title="Choice Hotels"
              description="Choice Hotels International officially welcomes Radisson Hotels Americas to the family. With the addition of more than 600 Radisson hotels, Choice now offers more properties to visit in new destinations across the U.S., Canada, the Caribbean and Latin America."
              demoLink="https://choicehotels.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myself}
              isBlog={false}
              title="Myself:LifeStyle"
              description="Myself is the lifestyle magazine for women who know what they want from life. We inspire and inform, show the latest fashion and beauty trends, present strong personalities and provide inspiration for a self-determined, happy life. Whether business questions or family problems!"
              demoLink="https://myself.de/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
