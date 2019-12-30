import React, {useEffect, useRef, useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button, Typography } from '@material-ui/core'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { headerHeight } from '../constants'

const useStyles = makeStyles(theme => ({
  main: {
    background: '#162229 radial-gradient(circle at top left, #05828e 0%, #162229 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '10%',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
    },
  },
  h1: {
    color: theme.palette.white,
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.3rem',
    },
    marginBottom: theme.spacing(6)
  },
  h3: {
    color: theme.palette.white,
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.7rem'
    },
  },
  cta: {
    borderColor: theme.palette.white,
    color: theme.palette.white
  }
}))

const Hero = ({}) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const hero = useRef()
  const [isOut, setOut] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if(hero.current) {
        const {bottom} = hero.current.getBoundingClientRect()
        if(bottom < headerHeight && !isOut) {
          setOut(true)
          window.dispatchEvent(new Event('heroOut'))
        }
        if(bottom > headerHeight && isOut) {
          setOut(false)
          window.dispatchEvent(new Event('heroIn'))
        }
      }
    }
    window.addEventListener('scroll', onScroll)

    return function cleanup() {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return (
    <div className={classes.main} ref={hero}>
      <Typography variant="h1" className={classes.h1}>{t('Expert Web Developer')}</Typography>
      <Typography variant="h3" className={classes.h3}>{t('Quality is my Priority')}</Typography>
      <Link href="/contact">
        <Button size="large" variant="outlined" aria-label="add" className={classes.cta}>
          {t('Contact Me')}
        </Button>
      </Link>
    </div>
  )
}

export default React.memo(Hero)
