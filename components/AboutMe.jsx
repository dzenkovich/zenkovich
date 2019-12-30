import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  main: {
    padding: '10%',
    background: '#fff',
    '& .MuiTypography-h3': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.2rem'
      },
    }
  },
  about: {
    marginTop: theme.spacing(2),
  },
  skills: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
  skill: {
    width: 100,
    height: 100,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    [theme.breakpoints.down('sm')]: {
      width: 80,
      height: 80,
    },
  },
  js: {
    backgroundImage: 'url(/images/JS.png)',
  },
  react: {
    backgroundImage: 'url(/images/react.png)',
  },
  node: {
    backgroundImage: 'url(/images/node.png)',
  },
}))

const AboutMe = ({}) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.main}>
      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          <Typography variant="h3">{t('React/Node Expert')}</Typography>
          <Typography className={classes.about}>{t('messageAboutMe1')}<br/>{t('messageAboutMe2')}</Typography>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.skills}>
          <div className={clsx(classes.skill, classes.js)}/>
          <div className={clsx(classes.skill, classes.react)}/>
          <div className={clsx(classes.skill, classes.node)}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default React.memo(AboutMe)
