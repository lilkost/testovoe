import { Modal, Form, Input, Button } from "antd";
import { useProducts } from "../../store";

const ModalUpdate = () => {
    const [form] = Form.useForm();
    
    const {openModalUpdate, changeStateOpenModalUpdate, changeItem} = useProducts();
    const {title, text, id} = changeItem;

    const changeItemValue = (e) => {
        const val = e.values
        console.log(val);

        fetch(`https://663b6072fee6744a6ea16c1b.mockapi.io/product/${id}`, {
            method: 'PUT', // or PATCH
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                title: val.title,
                text: val.text
            })
        }).then(res => {
            if (res.ok) {
                changeStateOpenModalUpdate();
                return res.json();
            }
        })
    }

    return (
        <Modal 
            title="Форма создания" 
            open={openModalUpdate} 
            onCancel={changeStateOpenModalUpdate}
            footer={[]}
        >
            <Form.Provider 
                onFormFinish={(_, e)=>{
                    changeItemValue(e);
                }}
            >
                <Form form={form}>
                    <Form.Item label="Заголовок" name="title" rules={[{required: true}]} initialValue={title}> 
                        <Input placeholder="Заголовок..." />
                    </Form.Item>
                    <Form.Item label="Текст" name="text" rules={[{ required: true }]} initialValue={text}>
                        <Input.TextArea placeholder="Текст..."/>
                    </Form.Item>
                    <Button htmlType="submit" type="primary">Обновить</Button>
                </Form>
            </Form.Provider>

        </Modal>
    )
}

export default ModalUpdate;