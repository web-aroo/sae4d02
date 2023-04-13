import Sound from "@/utils/sound";
import Party from "@/utils/party";
import {useStepsStore} from "@/stores/steps";

export default class Game{

    static winFxAndRedirect(endpoint, router){

        const store = useStepsStore();

        Sound.win();
        Party.play();
        setTimeout(() => {
            router.push(endpoint);
            store.nextStep();
        },2000)

    }

}