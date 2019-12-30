import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  ul: {
    padding: '10%',
    background: theme.palette.doubleLight,
    listStyle: 'none',
    '& > li': {
      marginBottom: theme.spacing(6)
    },
    '& .MuiTypography-root': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      }
    },
    '& .MuiTypography-h3': {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.2rem',
      },
    }
  },
  img: {
    width: '100%',
    height: 100,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    marginBottom: theme.spacing(2),
  },
  tdd: {
    height: 120,
    backgroundImage: 'url(/images/tdd.png)',
  },
  code: {
    backgroundImage: 'url(/images/code.png)',
  },
  performance: {
    backgroundImage: 'url(/images/performance.png)',
  },
  lean: {
    backgroundImage: 'url(/images/lean.png)',
  },
}))

const Item = ({image, children}) => (
  <Grid container>
    <Grid item xs={12} sm={6} md={3}>{image}</Grid>
    <Grid item xs={12} sm={6} md={9}>{children}
    </Grid>
  </Grid>
)

Item.propTypes = {
  image: PropTypes.node.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}

const Offer = ({}) => {
  const classes = useStyles()
  const {t} = useTranslation()

  return (
    <ul className={classes.ul}>
      <li>
        <Item image={<div className={clsx(classes.img, classes.tdd)}/>}>
          <Typography variant="h3">{t('Test Driven Development')}</Typography>
          <Typography>{t(`messageTDD`)}</Typography>
        </Item>
      </li>
      <li>
        <Item image={<div className={clsx(classes.img, classes.code)}/>}>
          <Typography variant="h3">{t('Code Quality')}</Typography>
          <Typography>{t('messageQuality')}</Typography>
        </Item>
      </li>
      <li>
        <Item image={<div className={clsx(classes.img, classes.performance)}/>}>
          <Typography variant="h3">{t('Performance')}</Typography>
          <Typography>{t('messagePerformance')}</Typography>
        </Item>
      </li>
      <li>
        <Item image={<div className={clsx(classes.img, classes.lean)}/>}>
          <Typography variant="h3">{t('Agile and Lean')}</Typography>
          <Typography>{t('messageLean')}</Typography>
        </Item>
      </li>
    </ul>
  )
}

export default React.memo(Offer)
