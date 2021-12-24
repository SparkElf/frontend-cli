import { TabBar } from "../../../common/TabBar/TabBar"

const data = ['推荐', '后端', '前端', 'Android', 'iOS', '人工智能', '开发工具', '代码人生', '阅读']


export const Header = () => {
    return (
        <>
            <TabBar data={data} />
        </>
    )
}