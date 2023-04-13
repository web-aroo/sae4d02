import Sound from "@/utils/sound";
import Party from "@/utils/party";

export default class Game{

    static winFxAndRedirect(endpoint, router){
        Sound.win();
        Party.play();
        setTimeout(() => {
            router.push(endpoint);
        },2000)

    }

}