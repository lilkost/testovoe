import { Modal, Form, Input, Button } from "antd";

const ModalQS = ({open,setOpen, changeStateModal}) => {
    const [form] = Form.useForm();
    
    const createProduct = (e) => {
        const data = e.values;
        
        const {title, text} = data;

        
        const newProduct = {
            title,
            text,
            favorites: false,
        };

        fetch('https://663b6072fee6744a6ea16c1b.mockapi.io/product', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(newProduct)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        })

        setOpen(false);
    }

    return (
        <Modal 
            title="Форма создания" 
            open={open} 
            onCancel={changeStateModal}
            footer={[]}
        >
            <Form.Provider 
                onFormFinish={(_, e)=>{
                    createProduct(e);
                }}
            >
                <Form form={form}>
                    <Form.Item label="Заголовок" name="title" rules={[{required: true}]}>
                        <Input placeholder="Заголовок..." />
                    </Form.Item>
                    <Form.Item label="Текст" name="text" rules={[{ required: true }]}>
                        <Input.TextArea placeholder="Текст..."/>
                    </Form.Item>
                    <Button htmlType="submit" type="primary">Добавить</Button>
                </Form>
            </Form.Provider>

        </Modal>
    )
}

export default ModalQS