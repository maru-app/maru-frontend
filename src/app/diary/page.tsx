import Container from '@/components/Container';
import PageTitle from '@/components/Typography/PageTitle';
import { FC } from 'react';
import MyDiaryCard from '@/components/MyDiaryCard';
import Strike from '@/components/Strike';

const Page: FC = () => {
  return (
    <Container className="mt-20">
      <PageTitle title="내 일기" description="새로운 일기를 쓰거나 지금까지 쓴 일기를 확인해보세요." />
      <div className="mt-10">
        <h2 className="text-2xl font-bold">연속 기록</h2>
        <Strike />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold">작성한 일기</h2>
        <div className="grid grid-cols-4 gap-x-4 gap-y-2">
          <MyDiaryCard title="일기 요약이나 제목 같은 내용이 들어가면 좋습니다." date={new Date()} />
          <MyDiaryCard
            title="대법원은 법률에 저촉되지 아니하는 범위안에서 소송에 관한 절차, 법원의 내부규율과 사무처리에 관한 규칙을 제정할 수 있다."
            date={new Date()}
          />
          <MyDiaryCard
            title="대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다."
            date={new Date()}
          />
          <MyDiaryCard title="군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다." date={new Date()} />
          <MyDiaryCard
            title="국가안전보장회의는 대통령이 주재한다. 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다."
            date={new Date()}
          />
          <MyDiaryCard
            title="국가는 농업 및 어업을 보호·육성하기 위하여 농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다."
            date={new Date()}
          />
        </div>
      </div>
    </Container>
  );
};

export default Page;
