// material-ui
import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

// ==============================|| SKELETON - EARNING CARD ||============================== //

const  NodeSkeletonCard = ({colors}) => (
    <Card sx={{backgroundColor: colors[200]}}>
        <CardContent>
            <Grid container direction="column">
                <Grid item>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Skeleton variant="rectangular" width={44} height={44} sx={{backgroundColor: colors.light}} />
                        </Grid>
                        <Grid item>
                            <Skeleton variant="rectangular" width={34} height={34} sx={{backgroundColor: colors.light}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Skeleton variant="rectangular" sx={{ my: 2, backgroundColor: colors.light }} height={40} />
                </Grid>
                <Grid item>
                    <Skeleton variant="rectangular" height={30} sx={{backgroundColor: colors.light}}/>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default NodeSkeletonCard;
