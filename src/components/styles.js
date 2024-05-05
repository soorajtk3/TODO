import styled from "@emotion/styled";

export const StyledTodo = styled.div`
  .mainContainer {
    margin: 20px auto;
    max-width: 500px;
    border-radius: 8px;
    background: #f1f1f1;
    padding: 15px 24px;
  }
  .inputField {
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid lightgray;
  }.inputTodo{
    display:flex;
    gap:8px;
    justify-content: center;
    width: 100%;
  }.addTodoBtn{
    padding:5px 10px;
    border-radius:10px;
    background: rgb(252, 168, 168);
    color: rgb(252, 37, 37);
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600
  }.todoDetails{
    display: flex;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    padding: 12px;
    background: rgb(252, 225, 105);
    margin-bottom: 8px;
    box-sizing: border-box
  }.todoLabel{
    color: rgb(92, 75, 1);
    font-weight: 600;
  }.completedText{
    color: rgb(245, 94, 94);
    font-weight: 600;
    font-size: 16px;
  }
`;
