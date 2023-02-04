import { Text } from "../text/text.stories"

export const mapListData = (props) => {
    const { data } = props
    const dataJSX = [] // array for JSX module elements 
    const dataObjectKeys = Object.keys(data)

    dataObjectKeys.length == 1
        ? data[dataObjectKeys].forEach((data, key) => {
            dataJSX.push(<Text key={key} data={{ label: data }} />)
        })
        : data?.forEach((data, key) => {
            dataJSX.push(<Text key={key} data={{ label: data }} />)
        })
    return dataJSX
}

export const mapListText = (props) => {
    const { data } = props
    return Object.keys(data).map((title, key) => { return title })[0]
}