import { Container } from "./styles";
import { Summary } from "../Summary";
import { TranscationsTable } from "../TranscationsTable";


export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TranscationsTable />
    </Container>
  );
}