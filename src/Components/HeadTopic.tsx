type HeadTopicPropsType = {
    class: string;
    id?: string;
    text: string;
    icon?: React.ReactNode;
};

const HeadTopic = (props: HeadTopicPropsType) => {
    return (
        <div className={props.class} id={props.id}>
            <p>{props.text}</p>
            {props.icon}
        </div>
    );
};

export default HeadTopic;
