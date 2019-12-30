import React, { useRef, useState } from 'react'
import axios from 'axios'
import {
  Button,
  CircularProgress,
  FormHelperText,
  Grid,
  MenuItem,
  Popover,
  TextField,
  Typography,
} from '@material-ui/core'
import { Error, MailOutline } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import ReCAPTCHA from 'react-google-recaptcha'
import { headerHeight } from '../constants'

const interests = [
  {
    value: 'Web Application Development',
    label: 'Web Application Development',
  },
  {
    value: 'REST API Development',
    label: 'REST API Development',
  },
  {
    value: 'Quality Analysis, Consultancy',
    label: 'Quality Analysis, Consultancy',
  },
]

const budgets = [
  {
    value: 'less than 1,000',
    label: 'Less than $1,000',
  },
  {
    value: '1,000-10,000',
    label: '$1,000 - $10,000',
  },
  {
    value: 'over 10,000',
    label: 'Over $10,000',
  },
]

const useStyles = makeStyles(theme => ({
  main: {
    padding: '10%',
    marginTop: headerHeight,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  captcha: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  buttonRow: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing()
    },
    '& .MuiCircularProgress-root': {
      marginRight: theme.spacing(2),
    }
  },
  error: {
    padding: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(2),
    },
  }
}))

const makeValidate = t => (values => {
    const errors = {}
    if (!values.name) {
      errors.name = t('Name is required')
    }
    if (!values.email) {
      errors.email = t('Email is required')
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = t('Invalid email address')
    }
    if (!values.message) {
      errors.message = t('Message is required')
    } else if (values.message.length < 20) {
      errors.message = t('Message is too short')
    }
    if (!values.captcha) {
      errors.captcha = t('Captcha is required')
    }

    return errors
  }
)

const Contact = ({}) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const [ isSubmitting, setSubmitting ] = useState(false)
  const [ error, setError ] = useState('')
  const reCaptchaRef = useRef(null)
  const errorAnchor = useRef(null)

  const dismissError = () => setError(false)

  const { errors, values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: '',
      email: '',
      interest: '',
      budget: '',
      message: '',
      captcha: '',
    },
    validate: makeValidate(t),
    onSubmit: values => {
      setSubmitting(true)
      axios.post('/api/send', values)
        .then(response => {
          setSubmitting(false)
          reCaptchaRef.current.reset()
        })
        .catch(error => {
          setSubmitting(false)
          setError(error.message || 'Server error! Please try again.')
        })
    },
  })

  return (
    <form onSubmit={handleSubmit} className={classes.main}>
      <Typography variant="h4" className={classes.title}>{t('Great! Please tell me a bit about yourself.')}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label={t('Name')}
                     name="name"
                     onChange={handleChange}
                     value={values.name}
                     variant="outlined"
                     error={!!errors.name}
                     helperText={errors.name}
                     fullWidth={true}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label={t('Email')}
                     name="email"
                     onChange={handleChange}
                     value={values.email}
                     variant="outlined"
                     error={!!errors.email}
                     helperText={errors.email}
                     fullWidth={true}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label={t('Interest')}
                     name="interest"
                     onChange={handleChange}
                     value={values.interest}
                     variant="outlined"
                     select={true}
                     fullWidth={true}>
            {
              interests.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))
            }
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label={t('Budget')}
                     name="budget"
                     onChange={handleChange}
                     value={values.budget}
                     variant="outlined"
                     select={true}
                     fullWidth={true}>
            {
              budgets.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))
            }
          </TextField>
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextField label={t('Message')}
                     name="message"
                     onChange={handleChange}
                     value={values.message}
                     variant="outlined"
                     error={!!errors.message}
                     helperText={errors.message}
                     fullWidth={true}
                     multiline={true}
                     rows={5}/>
        </Grid>
        <Grid item xs={12} lg={12} className={classes.captcha}>
          <div>
            <ReCAPTCHA sitekey={process.env.RECAPTCHA} ref={reCaptchaRef} onChange={response => {
              setFieldValue('captcha', response)
            }}/>
            {errors.captcha && <FormHelperText error={true}>{errors.captcha}</FormHelperText>}
          </div>
        </Grid>
        <Grid item xs={12} lg={12} className={classes.buttonRow}>
          <Button color="primary"
                  variant="contained"
                  ref={errorAnchor}
                  type="submit"
                  disabled={isSubmitting}>
            { isSubmitting ? <CircularProgress size={24} color="inherit"/> : <MailOutline/> }
            {t('Get in Touch')}
          </Button>
          {
            errorAnchor && !!error &&
            <Popover open={true}
                     anchorEl={errorAnchor.current}
                     onClose={dismissError}
                     anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                     transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
              <Typography className={classes.error} color="error"><Error/> {error}</Typography>
            </Popover>
          }
        </Grid>
      </Grid>
    </form>
  )
}

export default React.memo(Contact)
