import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardPros } from '../../components/TransactionCard';
import { 
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGretting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransectionList,
    LogoutButton
 } from './styles'

 export interface DataListProps extends TransactionCardPros {
     id: string
 }

export function Dashboard(){

    const data: DataListProps[] =[ {
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de site",
        amount: " R$ 12.000,00",
        category: {
            name: "Vendas",
            icon: "dollar-sign"           
        },
        date: "12/12/21"
    },
    {
        id: '2',
        type: 'negative',
    title: "Aluguel do Apto",
    amount: " R$ 1.200,00",
    category: {
        name: "Casa",
        icon: "shopping-bag"           
    },
    date: "12/12/21"
},
{
    id: '3',
    type: 'negative',
    title: "Comida",
    amount: " R$ 400,00",
    category: {
        name: "Alimentação",
        icon: "coffee"           
    },
    date: "12/12/21"
}
]

  return (
    <Container>
        <Header>
            <UserWrapper>
            <UserInfo>
                <Photo 
                
                source={{ uri: 'https://avatars.githubusercontent.com/u/20932056?v=4'}}/>
                <User>
                    <UserGretting>  Olá,</UserGretting>
                      <UserName>Sergio</UserName>
                </User>           
            </UserInfo>
            <LogoutButton onPress={() => {}}>

            <Icon name="power"/>
            </LogoutButton>
            </UserWrapper>
        </Header>
    <HighlightCards >
     <HighlightCard
          type="up" 
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril" 
          />
     <HighlightCard
     type="down" 
     title="Saídas"
     amount="R$ 1.259,00"
     lastTransaction="Última saída dia 13 de abril"
     />  
     <HighlightCard 
     type="total"
     title="Total"
     amount="R$ 16.141,00"
     lastTransaction="01 à 16 de abril"
     />  
     </HighlightCards>   
    
    <Transactions>
        <Title>
            Listagem
        </Title>
        <TransectionList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>  <TransactionCard data={item} />}
       
        />
       
    </Transactions>
    
    </Container>
  )
}