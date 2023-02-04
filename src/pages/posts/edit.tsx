import {
    useForm,
    Form,
    Input,
    Select,
    Edit,
    useSelect
} from "@pankod/refine-antd"
import { IPost } from "interfaces"

export const PostEdit: React.FC = () => {
    const { formProps, saveButtonProps, queryResult } = useForm<IPost>()
    const { selectProps: categorySelectProps } = useSelect<IPost>({
        resource: "categories",
        defaultValue: queryResult?.data?.data?.category.id
    })
    return <div></div>
}