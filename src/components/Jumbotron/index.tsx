import { FC } from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';

const Jumbotron: FC = () => {
  return (
    <section className="h-[36rem] bg-gray-100 pt-16">
      <Container className="flex h-full flex-col justify-center">
        <div>
          <h1 className="text-4xl font-bold">
            나만의 일기을 쓰는 공간,
            <br />
            여기는 <span className="font-hahmlet text-emerald-500">마루</span>입니다.
          </h1>
          <Button className="mt-6 bg-black text-white hover:bg-black/80">시작하기</Button>
        </div>
      </Container>
    </section>
  );
};

export default Jumbotron;
