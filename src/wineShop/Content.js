import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonNext: {
        display: 'inline-block',
        borderRadius: '4px',
        backgroundColor: 'royalblue',
        border: 'none',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: '20px',
        padding: '10px',
        width: '100px',
        transition: 'all 0.5s',
        cursor: 'pointer',
        margin: '5px',
    },
    buttonPrev: {
        display: 'inline-block',
        borderRadius: '4px',
        backgroundColor: 'gray',
        border: 'none',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: '20px',
        padding: '10px',
        width: '100px',
        transition: 'all 0.5s',
        cursor: 'pointer',
        margin: '5px',
    },
    buttonSub: {
        display: 'inline-block',
        borderRadius: '4px',
        backgroundColor: 'green',
        border: 'none',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: '20px',
        padding: '10px',
        width: '100px',
        transition: 'all 0.5s',
        cursor: 'pointer',
        margin: '5px',
    },
    resetBtn: {
        marginTop: '100px',
        display: 'inline-block',
        borderRadius: '4px',
        backgroundColor: 'red',
        border: 'none',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: '20px',
        padding: '10px',
        width: '100px',
        transition: 'all 0.5s',
        cursor: 'pointer',
        margin: '5px',
    },
    tdb: {
        marginTop: '50px',
        fontSize: '50px',
        fontWeight: 'bold',
        textAlign: 'center'
    }
}));

function Content({addNewUser, signup, areaDisplay, resetUser}) {
    const classes = useStyles();

    const [customerData, setCustomerData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        password: '',
        confirmation: '',
        summary: ''
    })
    const [navigationStep, setNavigationStep] = useState(0)


    const changeDetails = name => event => {
        setCustomerData({ ...customerData, [name]: event.target.value });
    }

    const nextStep = () => {
        setNavigationStep(navigationStep + 1)
    }

    const prevStep = () => {
        setNavigationStep(navigationStep - 1)
    }

    const handleSubmit = () => {
       if(customerData.firstName === '' || customerData.lastName === '' || customerData.phone === ''
        || customerData.address === '' || customerData.password === '' || customerData.confirmation === ''
        || customerData.summary === '') {
            alert('It is not possible to proceed to the next step without filling in all the fields');
            return;
        } else {
            addNewUser(customerData);
            setCustomerData({
                firstName: '',
                lastName: '',
                phone: '',
                address: '',
                password: '',
                confirmation: '',
                summary: ''
            });
            setNavigationStep(0);
        }
    }

    return (
        <Grid container alignItems={'center'} justify={'center'}>
            {
                signup === false ?
                    <form >
                        {/* {step} */}
                        <Grid container direction={'column'} alignItems={'center'} justify={'center'}>
                            {
                                navigationStep === 0 ? 
                                    <>
                                        <Grid item xs={12} style={{ margin: '15px 0px' }} style={{ margin: '25px 0px 15px 0px' }}>
                                            <TextField
                                                required
                                                style={{ backgroundColor: 'white' }}
                                                variant='outlined'
                                                type={'text'}
                                                value={customerData.firstName}
                                                label='firstName'
                                                name={'firstName'}
                                                onChange={changeDetails('firstName')}
                                            />
                                        </Grid>

                                        <Grid item xs={12} style={{ margin: '15px 0px' }} style={{ margin: '25px 0px 15px 0px' }}>
                                            <TextField
                                                required
                                                style={{ backgroundColor: 'white' }}
                                                variant='outlined'
                                                type={'text'}
                                                value={customerData.lastName}
                                                label='lastName'
                                                name={'lastName'}
                                                onChange={changeDetails('lastName')}
                                            />
                                        </Grid>
                                        </> 
                                    : 
                                    navigationStep === 1 ? 
                                        <>
                                            <Grid item xs={12} style={{ margin: '15px 0px' }} style={{ margin: '25px 0px 15px 0px' }}>
                                                <TextField
                                                    required
                                                    style={{ backgroundColor: 'white' }}
                                                    variant='outlined'
                                                    type={'number'}
                                                    value={customerData.phone}
                                                    label='phone'
                                                    name={'phone'}
                                                    onChange={changeDetails('phone')}
                                                />
                                            </Grid>

                                            <Grid item xs={12} style={{ margin: '15px 0px' }} style={{ margin: '25px 0px 15px 0px' }}>
                                                <TextField
                                                    required
                                                    style={{ backgroundColor: 'white' }}
                                                    variant='outlined'
                                                    type={'text'}
                                                    value={customerData.address}
                                                    label='address'
                                                    name={'address'}
                                                    onChange={changeDetails('address')}
                                                />
                                            </Grid>
                                        </>
                                        :
                                        <>
                                            <Grid item xs={12} style={{ margin: '15px 0px' }} style={{ margin: '25px 0px 15px 0px' }}>
                                                <TextField
                                                    required
                                                    style={{ backgroundColor: 'white' }}
                                                    variant='outlined'
                                                    type={'password'}
                                                    value={customerData.password}
                                                    label='password'
                                                    name={'password'}
                                                    onChange={changeDetails('password')}
                                                />
                                            </Grid>

                                            <Grid item xs={12} style={{ margin: '15px 0px' }} style={{ margin: '25px 0px 15px 0px' }}>
                                                <TextField
                                                    required
                                                    style={{ backgroundColor: 'white' }}
                                                    variant='outlined'
                                                    type={'password'}
                                                    value={customerData.confirmation}
                                                    label='confirmation'
                                                    name={'confirmation'}
                                                    onChange={changeDetails('confirmation')}
                                                />
                                            </Grid>

                                            <Grid item xs={12} style={{ margin: '15px 0px' }} style={{ margin: '25px 0px 15px 0px' }}>
                                                <TextField
                                                    required
                                                    style={{ backgroundColor: 'white' }}
                                                    variant='outlined'
                                                    multiline
                                                    rows={4}
                                                    value={customerData.summary}
                                                    label='summary'
                                                    name={'summary'}
                                                    onChange={changeDetails('summary')}
                                                />
                                            </Grid>
                                        </>
                            }
                        </Grid>
                        <Grid>
                            {
                                navigationStep !== 0 ?
                                    <Button className={classes.buttonPrev} value="Prev" onClick={prevStep}>
                                        <span>Back</span>
                                    </Button>
                                    :
                                    ""
                            }

                            {
                                navigationStep !== 2 ?
                                    <Button className={classes.buttonNext} value="Next" onClick={nextStep}>
                                        <span>Next</span>
                                    </Button>
                                    :
                                    <Button className={classes.buttonSub} value="Next" onClick={handleSubmit}>
                                        <span>Submit</span>
                                    </Button>
                            }
                        </Grid>
                    </form>
                    :
                    areaDisplay === 1 ?
                        <Grid item xs={12} className={classes.tdb}>
                            TBD
                        </Grid>
                        :
                        areaDisplay === 2 ?
                            <Grid item xs={12}>
                                <Button className={classes.resetBtn} onClick={resetUser}>
                                    Reset
                                </Button>
                            </Grid>
                            :
                            ""
            }
        </Grid>
    )
}

export default Content
