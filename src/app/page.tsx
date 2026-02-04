import { Suspense } from "react";
import { Container } from "../components/Container";
import { SpinLoader } from "../components/SpinLoader";
import { PostsList } from "../components/PostsList";
import { Header } from "../components/Header";


export default async function Home() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-extrabold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
