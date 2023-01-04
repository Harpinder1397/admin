import { Button, Checkbox, Col, Form, Input, InputNumber, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { LoginAPI } from '../../api/auth';

const Login = () => {
  const history = useHistory()
  const onFinish = async (values) => {
    const loginResponse = await LoginAPI(values);
    if (loginResponse) {
      // setToken(loginResponse);
      history.push('/admin/manage-states')
    } else {
      // setErrorMsg('Incorrect userName or password');
    }
    return null;
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

    return (
      <Row>
      <Col span={12} offset={6}>
      <Form
      name="basic"
      // labelCol={{
      //   span: 8,
      // }}
      // wrapperCol={{
      //   span: 16,
      // }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Mobile Number"
        name="mobileNumber"
        rules={[
          {
            required: true,
            message: 'Please input your mobile number!',
          },
        ]}
      >
        <InputNumber width="100%"/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Col>
    </Row>
     
    );
  }

export default Login;