import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { Button } from '../../components/Form/Button';

import { categories } from '../../utils/categories';

import {
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    Separator,
    Footer,
} from './styles';

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: string;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}


export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory
}: Props) {
    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>
        </Container>
    )
}
