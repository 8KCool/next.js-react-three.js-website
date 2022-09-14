import React, { ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react";
import { Button, createStyles, Input } from '@mantine/core';
import { IconPlus, IconSearch } from '@tabler/icons';


const useStyles = createStyles(() => ({
    topSection: {
        display: 'flex',
        alignItems: 'center',
        '@media only screen and (max-width: 850px)': {
            flexDirection: 'column',
        },
    },
    searchForm: {
        display: 'flex',
        width: '600px',
        '@media only screen and (max-width: 850px)': {
            width: '300px',
        },
    },
}));

interface TableHeaderProps {
    search: {
        value: string;
        onChange: ChangeEventHandler<HTMLInputElement>;
        handleSubmit: FormEventHandler<HTMLFormElement>;
        placeholder?: string;
    };
    create: {
        onClick: MouseEventHandler<HTMLButtonElement>;
        text: string | JSX.Element
    }
}

const TabHeaderAction: React.FC<TableHeaderProps> = (props) => {
    const { search, create } = props;
    const { classes } = useStyles();

    return (
        <section className={classes.topSection}>
            <form className={classes.searchForm} onSubmit={search.handleSubmit}>
                <Input
                    sx={{ width: '100%' }}
                    placeholder={search.placeholder ?? "Search by title"}
                    value={search.value}
                    onChange={search.onChange}
                />
                <Button type="submit" variant="outline">
                    <IconSearch />
                </Button>
            </form>
            <Button
                color="green"
                variant="filled"
                onClick={create.onClick}
                sx={{ backgroundColor: '#40c057 !important', margin: '1rem auto' }}
                leftIcon={<IconPlus />}
            >
                {create.text}
            </Button>
        </section>
    )
}

export default TabHeaderAction