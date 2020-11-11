import {maksStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const Answer = (props) => {
    return (
        <Button varian="contained">
            {props.content}
        </Button>
    )
}

export default Answer