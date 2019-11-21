import { Col, Input, Row, Card, List, Tag, Pagination } from 'antd';
import React from 'react';
import { Issue } from '../../modules';

export interface SearchComponentProps {
    loading: boolean;
    onSubmit: (query: string, page?: number) => void;
    data: Array<Issue>;
    found: boolean;
    value: string;
    onChange: (value: string) => void;
    pages: number;
}

const { Search } = Input;

const IssueComponent = (issue: Issue, index: number) => (
    <>
        <List
            header={<Row style={{color: '#1a0dab'}}><b>Symptom:</b> { issue.symptom } <br/> <b>Solutions:</b></Row>}
            dataSource={issue.solutions}
            renderItem={
                (solution: string) => (
                    <List.Item>
                        { solution }
                    </List.Item>
                )
            }
        />
        <br/>
    </>
);

export const SearchComponent = (props: SearchComponentProps) => {
    if (props.found) {
        return (
            <Card
                title={
                    <Col span={8} offset={0}>
                        <Search
                            value={props.value}
                            onChange={event => props.onChange(event.target.value)}
                            placeholder="Enter your question"
                            onSearch={(value: string) => props.onSubmit && props.onSubmit(value)}
                            enterButton
                            size="large"
                        />
                    </Col>
                }
                >

                <Row>
                    { props.data.map(IssueComponent) }
                </Row>

                <Row>
                    <Pagination
                        pageSize={20}
                        onChange={(page: number) => props.onSubmit(props.value, page)}
                        total={props.pages}
                        defaultCurrent={1}
                    />
                </Row>
            </Card>
        );
    }

    return (
        <Col span={8} offset={8} style={{marginTop: '45vh'}}>
            <Search
                value={props.value}
                onChange={event => props.onChange(event.target.value)}
                placeholder="Enter your question"
                onSearch={(value: string) => props.onSubmit && props.onSubmit(value)}
                enterButton
                size="large"
            />
        </Col>
    );
};
