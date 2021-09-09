import * as React from "react";
import * as Icon from "react-native-feather";
import { ActivityIndicator, Alert } from "react-native";

import DefaultCheckBox from "../../components/checkBox";
import DefaultSearchBar from "../../components/searchBar";

import { colors, StyledText } from "../../styles";
import { CheckBoxList, Container, HeaderContainer, HeaderRow, RowContainer, TouchableArea } from "./styles";

export const ToDoList = ({...props}) => {
    const [loading, setLoading] = React.useState(false);
    const [toDoList, setToDoList] = React.useState([]);
    const [finishedList, setFinisehdList] = React.useState([]);
    const [infoShow, setInfoShow] = React.useState(false);

    const handleDeleteAction =  (index) => {
        try {
            const Delete = async () => {
                try {
                    tmpArray = toDoList;
                    tmpArray.splice(index,1);
                    setToDoList(tmpArray);
                } catch (err) {
                    Alert.alert(
                        'Erro ao atualizar lista de',
                        `Erro: ${error}`
                    );
                };
            };

            const handleDelete = async (index) => {
                try {
                    setLoading(true);
                    await Delete(index);
                    setLoading(false);
                } catch (err) {
                    Alert.alert(
                        'Erro ao deletar item',
                        `Erro: ${error}`
                    );
                };
            };

            Alert.alert(
                'Essa tarefa será deletada.',
                'Você tem certeza que deseja deleta-la?',
                [
                    {
                        text: "Cancelar",
                        style:"cancel"
                    },
                    {
                        text: "Deletar",
                        onPress: () => handleDelete(index),
                        style:"destructive"
                    }
                ]
            );
        } catch (error) {
            Alert.alert(
                'Erro ao coletar sua resposta',
                `Erro: ${error}`
            );
        }    
    };

    const submit = async (finished) => {
        try {
            const tmpArray = finished ? finishedList : toDoList;
            const checkedArray = finished ? toDoList : finishedList;
            const notCheckedArray = [];
            tmpArray.map(item => {
                if (item.checked) {
                    checkedArray.push({ title: item.title, checked: false, finished: !finished });
                } else {
                    notCheckedArray.push(item)
                }
            });
            setToDoList(finished ? checkedArray : notCheckedArray);
            setFinisehdList(finished ? notCheckedArray : checkedArray);
        } catch (error) {
            Alert.alert(
                'Erro ao voltar tarefa',
                `Erro: ${error}`
            );
        }
    }

    const handleSubmit = async (finished) => {
        try {
            setLoading(true);
            await submit(finished)
        } catch (error) {
            Alert.alert(
                'Erro ao voltar tarefa',
                `Erro: ${error}`
            );
        } finally {
            setLoading(false);
        }
    }

    

    const changeCheckBoxState = async (checked, index, finished) => {
        try {
            let tmpArray = finished ? finishedList : toDoList;
            tmpArray[index].checked = checked;
            if (finished) {
                setFinisehdList(tmpArray);
            } else {
                setToDoList(tmpArray);
            }
        } catch (error) {
            Alert.alert(
                'Erro ao atualizar estado na checkbox',
                `Erro: ${error}`
            );
        }
    }
    
    const handleCheck = async (checked, index, finished) => {
        try {
            setLoading(true);
            await changeCheckBoxState(checked, index, finished);
        } catch (error) {
            Alert.alert(
                'Erro ao atualizar estado na checkbox',
                `Erro: ${error}`
            );
        } finally {
            setLoading(false);
        }
    }        
    return (
        <Container>
            <HeaderContainer>
                <HeaderRow>
                    <StyledText 
                        fontSize="18px"
                        lineHeight="27px"
                        color={colors.defaultBlack} 
                    >Lista de Tarefas</StyledText>
                    <TouchableArea onPress={() => setInfoShow(!infoShow)}>
                        <Icon.Info width="20px" color={colors.babyBlue}/>
                    </TouchableArea>
                </HeaderRow>
                {infoShow && (
                    <>
                    <StyledText 
                        color={colors.defaultGray} 
                    >* Para ajudar na sua organização, crie uma lista de tarefas diárias.</StyledText>
                    <StyledText 
                        color={colors.defaultGray} 
                    >* Você pode editar ou deletar uma tarefa caso haja algum erro, utilizando os botões a direta da tarefa</StyledText>
                    </>
                )}
                      </HeaderContainer>
            <CheckBoxList>
                <DefaultSearchBar 
                    onPress={(text) => setToDoList([...toDoList, { title: text, checked: false, finished: false }])}
                />
                <RowContainer>
                    {toDoList.filter(value => value.checked).length > 0 && 
                        <TouchableArea onPress={() => handleSubmit(false)}>
                            <StyledText
                                color={colors.error}
                            >Concluir tarefas marcadas</StyledText>
                        </TouchableArea>
                    }
                </RowContainer>
                {loading ? 
                    (<ActivityIndicator />) :
                    (
                        toDoList.map((check, index) => {
                            return (
                                <DefaultCheckBox 
                                    key={index}
                                    index={index}
                                    finished={false}
                                    title={check.title} 
                                    handleCheck={handleCheck}
                                    handleDeleteItem={handleDeleteAction}
                                    checked={toDoList[index].checked}
                                />
                            )
                        }) 
                    ) 
                }
            </CheckBoxList>
            <HeaderContainer>
                <HeaderRow>
                    <StyledText 
                        fontSize="18px"
                        lineHeight="27px"
                        color={colors.defaultBlack} 
                    >Tarefas Finalizadas</StyledText>
                </HeaderRow>
            </HeaderContainer>
            <CheckBoxList>
                <RowContainer>
                    {finishedList.filter(value => value.checked).length > 0 && 
                        <TouchableArea onPress={() => handleSubmit(true)}>
                            <StyledText
                                color={colors.error}
                            >Voltar tarefas marcadas</StyledText>
                        </TouchableArea>
                    }
                </RowContainer>
                {loading ? 
                    (<ActivityIndicator />) :
                    (
                        finishedList.map((check, index) => {
                                return (
                                    <DefaultCheckBox 
                                        key={index}
                                        index={index}
                                        finished={true}
                                        title={check.title} 
                                        handleCheck={handleCheck}
                                        handleDeleteItem={null}
                                        checked={finishedList[index].checked}
                                    />
                                )
                            } 
                        ) 
                    ) 
                }
            </CheckBoxList>
        </Container>
    );
};

export default ToDoList;