import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Avatar, Chip, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
  main: {
    padding: '10%',
    '& .MuiTypography-h3': {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.2rem',
      },
    },
    '& .MuiChip-root': {
      marginBottom: theme.spacing(),
      marginRight: theme.spacing(),
    }
  },
  ul: {
    listStyle: 'none',
    marginBottom: theme.spacing(4),
    padding: 0,
    '& > li': {
      display: 'inline-block',
      marginRight: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    }
  },
}))

const Tools = ({}) => {
  const classes = useStyles()
  const {t} = useTranslation()

  return (
    <div className={classes.main}>
      <div>
        <Typography variant="h3">Experiences</Typography>
        <ul className={classes.ul}>
          <li><Typography>REST services</Typography></li>
          <li><Typography>Single Page Applications</Typography></li>
          <li><Typography>Architecture</Typography></li>
          <li><Typography>Test Driven Development</Typography></li>
          <li><Typography>Tests Automation</Typography></li>
          <li><Typography>Cost Estimation</Typography></li>
          <li><Typography>Agile Processes</Typography></li>
          <li><Typography>Lean Methodology</Typography></li>
        </ul>
      </div>

      <Typography variant="h3">Tools</Typography>
      <Chip avatar={<Avatar src="/images/JS.png"/>} label="JavaScript" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/React.png"/>} label="React" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/Redux.png"/>} label="Redux" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/MaterialUI.png"/>} label="MaterialUI" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/ReduxForm.png"/>} label="ReduxForm" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/Formik.png"/>} label="Formik" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/ReactRouter.png"/>} label="React Router" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/Bootstrap.png"/>} label="Bootstrap" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/HTML5.png"/>} label="HTML5" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/HTML5.png"/>} label="Canvas" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/SVG.png"/>} label="SVG" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/CSS3.png"/>} label="CSS3" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/jQuery.png"/>} label="jQuery" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/node.png"/>} label="Node.js" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/Express.png"/>} label="Express" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/PM2.png"/>} label="PM2" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/Cordova.png"/>} label="Cordova" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/MongoDB.png"/>} label="MongoDB" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/MySQL.png"/>} label="MySQL" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/PHP.png"/>} label="PHP" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/ZendFramework.png"/>} label="ZendFramework 2" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/Python.png"/>} label="Python" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/Django.png"/>} label="Django" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/Selenium.jpg"/>} label="Selenium" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/GA.png"/>} label="Google Analytics" variant="outlined"/>
      <Chip avatar={<Avatar src="/images/tools/Mixpanel.png"/>} label="Mixpanel" variant="outlined"/>
    </div>
  )
}

export default React.memo(Tools)
