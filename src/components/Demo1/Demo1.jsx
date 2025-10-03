import { Button } from "antd";
const Demo = () => {
  function* helloWorldGenerator() {
    yield "hello";
    yield "world";
    return "ending";
  }

  let hw = helloWorldGenerator();
  return (
    <Button
      type="primary"
      size="large"
      onClick={() => {
        console.log("点击了按钮");
        let result = hw.next();
        console.log(result);
      }}
    >
      主要操作按钮
    </Button>
  );
};
export default Demo;
