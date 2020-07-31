import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;
  clip-path: polygon(5% 1%, 9% 0%, 10% 2%, 11% 4%, 13% 4%, 18% 4%, 19% 0%, 22% 2%, 22% 2%, 23% 4%, 26% 4%, 27% 4%, 29% 2%, 32% 5%, 35% 3%, 36% 2%, 36% 2%, 40% 2%, 41% 2%, 43% 2%, 44% 2%, 47% 3%, 49% 3%, 52% 3%, 53% 3%, 57% 3%, 59% 3%, 61% 6%, 65% 3%, 68% 2%, 71% 1%, 75% 3%, 78% 3%, 83% 2%, 85% 1%, 88% 2%, 92% 2%, 94% 2%, 99% 6%, 98% 7%, 98% 9%, 97% 15%, 97% 15%, 97% 16%, 98% 18%, 98% 20%, 98% 20%, 98% 23%, 98% 24%, 97% 27%, 97% 28%, 97% 30%, 97% 30%, 98% 33%, 99% 39%, 98% 40%, 97% 40%, 95% 41%, 96% 45%, 97% 46%, 97% 46%, 98% 48%, 98% 49%, 98% 51%, 98% 52%, 98% 58%, 98% 62%, 98% 62%, 98% 64%, 98% 66%, 97% 68%, 97% 71%, 97% 75%, 99% 75%, 99% 75%, 99% 79%, 98% 82%, 97% 85%, 97% 87%, 97% 92%, 98% 93%, 100% 95%, 99% 99%, 96% 100%, 94% 100%, 92% 98%, 88% 96%, 87% 100%, 86% 100%, 84% 98%, 79% 98%, 77% 98%, 76% 98%, 73% 98%, 71% 98%, 68% 100%, 66% 100%, 62% 100%, 58% 99%, 54% 99%, 53% 99%, 47% 99%, 46% 99%, 39% 98%, 34% 98%, 34% 99%, 33% 99%, 27% 100%, 21% 98%, 19% 97%, 16% 97%, 14% 100%, 14% 100%, 10% 96%, 8% 100%, 6% 100%, 4% 99%, 2% 99%, 1% 95%, 2% 94%, 2% 85%, 2% 84%, 2% 82%, 2% 79%, 3% 74%, 3% 72%, 3% 68%, 2% 66%, 1% 64%, 0% 61%, 3% 56%, 3% 55%, 4% 51%, 2% 47%, 2% 46%, 3% 39%, 4% 38%, 4% 37%, 5% 31%, 5% 30%, 4% 29%, 2% 27%, 2% 26%, 1% 23%, 1% 21%, 2% 20%, 4% 14%, 3% 14%, 2% 11%, 1% 9%, 1% 7%, 4% 3%, 4% 3%, 4% 2%, 8% 0%);
  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
