import React, { useEffect, useState } from "react";
import {
    Button,
    Modal,
    Title,
    TextInput,
    Textarea,
    Divider,
    createStyles,
} from "@mantine/core";
import { MoadalType, ProposalType } from "./ProposalsTable";
import axios from 'axios'
import { TEST_API_URL } from '../../../util/constants'
import toast from 'react-hot-toast'

const useStyles = createStyles(() => ({
    inputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        '@media only screen and (max-width: 850px)': {
            flexDirection: 'column',
        },
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlignLast: 'end',
    },
    formChild: {
        width: '100%',
        margin: '0 1rem',
        '@media only screen and (max-width: 850px)': {
            margin: '0',
            marginBottom: '2rem',
        },
    },
}));

interface ProposalsModalsType {
    modal: MoadalType
    setModal: React.Dispatch<React.SetStateAction<MoadalType>>
    selectedProposal: ProposalType
    setSelectedProposal: React.Dispatch<React.SetStateAction<ProposalType>>
    fetchFunction: () => Promise<void>
}

const ModalCreate: React.FC<ProposalsModalsType> = (props) => {
    const [title, setTitle] = useState("");
    const [proposalText, setProposalText] = useState("");
    const { classes } = useStyles();

    const handleCreate = async (e: any) => {
        e.preventDefault()
        const newProposal = {
            title,
            proposal_text: proposalText
        }
        try {
            await axios.post(`${TEST_API_URL}/user/proposal/create`, newProposal, {
                withCredentials: true,
                headers: {
                    Authorization: `${localStorage.getItem('access_token')}`,
                },
            })
            toast.success('Created Successfully')
            props.setModal({ ...props.modal, open: false })
            void props.fetchFunction()
        } 
        catch (error) {
            let errMsg;
            if (axios.isAxiosError(error) && error.response) {
                errMsg = error.response.data.Data.Message as string;
            } else errMsg = String(error);
            toast.error(errMsg)
        }
    };

    const handleClose = () => {
        props.setModal({ ...props.modal, open: false });
        setTitle("");
        setProposalText("");
    }
    
    return (
        <Modal
            opened={props.modal.open}
            onClose={handleClose}
            size={'100%'}
            withCloseButton={false}
            padding={0}
        >
            <Title mb={'2rem'} sx={{ padding: '20px' }}>
                Create a new Proposal
            </Title>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
                onSubmit={handleCreate}
            >
                <section
                    className={classes.inputContainer}
                    style={{ padding: '0 20px 20px' }}
                >
                    <div className={classes.formChild}>
                        <div className={classes.inputContainer}>
                            <TextInput
                                label="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <Textarea
                            label="Proposal Text"
                            minRows={4}
                            maxRows={6}
                            value={proposalText}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                setProposalText(e.currentTarget.value)
                            }
                        />
                    </div>
                </section>
                <Divider />
                <div
                    style={{
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Button
                        variant="outline"
                        type="submit"
                        color="green"
                        mr={'1rem'}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="outline"
                        color="blue"
                        onClick={handleClose}
                    >
                        cancel
                    </Button>
                </div>
            </form>
        </Modal>
    )
};

const ModalEdit: React.FC<ProposalsModalsType> = (props) => {
    const { classes } = useStyles();
    const [title, setTitle] = useState(props.selectedProposal.title);
    const [proposal, setProposal] = useState(props.selectedProposal.proposal_text);
    useEffect(() => {
        setTitle(props.selectedProposal.title);
        setProposal(props.selectedProposal.proposal_text)
    }, [props.selectedProposal])
    const handleClose = () => {
        props.setModal({ ...props.modal, open: false });
    };

    const handleEdit = async (e: any) => {
        e.preventDefault();
        const updatedProposal = {
            id: props.selectedProposal.id,
            title,
            proposal
        }
        try {
            await axios.put(`${TEST_API_URL}/user/proposal/update`, updatedProposal, {
                    withCredentials: true,
                    headers: {
                        Authorization: `${localStorage.getItem('access_token')}`,
                    },
                }
            )
            toast.success('Created Successfully')
            handleClose()
            void props.fetchFunction()
        } catch (error) {
            toast.error('An error occured')
        }
    };

    return (
        <Modal
            opened={props.modal.open}
            onClose={handleClose}
            size={'100%'}
            withCloseButton={false}
            padding={0}
        >
            <Title mb={'2rem'} sx={{ padding: '20px' }}>
                Create a new Proposal
            </Title>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
                onSubmit={handleEdit}
            >
                <section
                    className={classes.inputContainer}
                    style={{ padding: '0 20px 20px' }}
                >
                    <div className={classes.formChild}>
                        <div className={classes.inputContainer}>
                            <TextInput
                                label="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <Textarea
                            label="Proposal Text"
                            minRows={4}
                            maxRows={6}
                            value={proposal}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProposal(e.currentTarget.value)}
                        />
                    </div>
                </section>
                <Divider />
                <div
                    style={{
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Button
                        variant="outline"
                        type="submit"
                        color="green"
                        mr={'1rem'}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="outline"
                        color="blue"
                        onClick={handleClose}
                    >
                        cancel
                    </Button>
                </div>
            </form>
        </Modal>
    )
};

const ModalDelete: React.FC<ProposalsModalsType> = (props) => {
    const handleClose = () => {
        props.setModal({ ...props.modal, open: false });
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`${TEST_API_URL}/user/proposal/delete/${props.selectedProposal.id}`, {
                withCredentials: true,
                headers: {
                    Authorization: `${localStorage.getItem('access_token')}`,
                },
            });
            toast.success('Deleted Successfully');
            handleClose();
            void props.fetchFunction();
        } catch (error) {
            toast.error('An error occured')
        }
    };

    return (
        <Modal
            opened={props.modal.open}
            onClose={handleClose}
            size={'md'}
            withCloseButton={false}
        >
            <Title order={4}>
                Are you sure you want to delete {props.selectedProposal.title} ?
            </Title>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '2rem',
                }}
            >
                <Button
                    mr={'1rem'}
                    variant="outline"
                    color="red"
                    onClick={handleDelete}
                >
                    Delete
                </Button>
                <Button variant="outline" color="gray" onClick={handleClose}>
                    cancel
                </Button>
            </div>
        </Modal>
    )
};


export const ProposalsModals: React.FC<ProposalsModalsType> = (props) => {
    const { modal } = props;

    return (
        <div>
            {
                {
                    "create": <ModalCreate {...props} />,
                    "edit": <ModalEdit {...props} />,
                    "delete": <ModalDelete {...props} />
                }[modal.type]
            }
        </div>
    )
}