import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./CSS/profile.css";
import { UserRound, Pencil } from "lucide-react";

const Profile = () => {
  const inputFileRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-slate-900 to-[#03333d] bg-fixed w-full h-auto">
      <Navbar />
      <div className="flex flex-col items-center md:items-start md:flex-row mx-7 lg:mx-10 mt-22">
        <div className="text-center mb-15 md:mr-18 lg:mr-25">
          <div className="bg-gray-400 rounded-[50%] overflow-hidden my-15 cursor-pointer hover:px-5 hover:pt-2 touch-padding">
            <UserRound
              color="white"
              className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]"
            />
            <div
              className="text-white md:text-xl justify-center items-center bg-gray-700 opacity-85 p-2 inputFile"
              onClick={() => {
                inputFileRef.current.click();
              }}
            >
              <Pencil className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
              <p className="ml-1 md:ml-2">Edit</p>
              <input
                type="file"
                accept="image/*"
                ref={inputFileRef}
                className="hidden"
              />
            </div>
          </div>
          <div className="text-white text-2xl font-bold mt-[-40px] lg:mt-[-35px]">
            <p>Username</p>
          </div>
        </div>
        <div className="text-justify md:mt-14">
            <p>E-mail Id</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aperiam, aliquid possimus a ducimus sint, aut voluptate magnam nesciunt neque consequuntur ab! Explicabo temporibus cupiditate sapiente ratione deleniti ducimus debitis.
            Cumque accusamus asperiores aut, quisquam incidunt beatae mollitia esse quibusdam soluta suscipit, voluptatibus impedit tempora molestiae culpa tenetur! Tenetur dolor ad, fugiat est cupiditate soluta eligendi! Sint distinctio blanditiis omnis.
            Tempore unde labore similique qui voluptate consequuntur ad, expedita magni alias ducimus minima! Explicabo aliquam beatae, temporibus voluptates perspiciatis voluptatum saepe distinctio dolor in vero officiis eveniet minus facilis ratione?
            Voluptatibus ipsa veritatis eaque! Dolorem quaerat quos illum voluptates similique autem aperiam placeat fuga quam iure ipsam expedita quia minima reiciendis dolore deleniti, nihil vero nobis laudantium repellat sint. Velit?
            Aliquid, nesciunt explicabo pariatur nulla repellendus, animi id voluptate, deserunt amet inventore nisi provident fugit assumenda maiores quaerat distinctio tempore enim veniam vitae. Minus vitae illum doloremque iure illo enim!
            Expedita, accusamus commodi eius reprehenderit, ratione harum officia mollitia quia voluptate nam quos adipisci sed odio! Porro totam ipsa, consequuntur, sed, facere libero asperiores modi velit maxime possimus optio tempora.
            Quod, porro unde? Consequatur nam labore alias perspiciatis beatae, explicabo quas. Maiores libero dolores delectus harum cumque eos veniam repellat reprehenderit unde, nemo accusantium, corporis consequuntur officiis repellendus consectetur error.
            Similique eaque temporibus illum? Magnam unde odit modi libero tempora officiis omnis sint totam nemo, dicta doloribus a deleniti minus nobis laborum. Sed natus similique atque doloribus quam, ab debitis.
            Sed ut asperiores illo aut vero totam tenetur delectus commodi culpa adipisci amet dolorem repellat, officiis nemo ex quasi eum voluptatem dolor numquam. Amet debitis tenetur deleniti magnam, dignissimos voluptatibus.
            Unde, quidem architecto eos fugit sed qui! Ipsum impedit dolor accusamus distinctio error! Consectetur ut perferendis, facere recusandae delectus assumenda officiis inventore quisquam rem maiores eum nesciunt nostrum nisi corrupti.
            Non cum saepe blanditiis voluptates modi hic minus iure. Libero eligendi nihil facere adipisci eveniet? Velit quam maxime inventore voluptatum voluptatem saepe praesentium accusamus molestias doloribus modi, temporibus ut officia!
            Voluptatem sequi, corrupti ex nostrum itaque aliquid culpa placeat quidem rerum illo, cupiditate laboriosam architecto quam quasi libero, alias ut eaque at voluptatum neque voluptas. Consequatur fuga numquam veniam sapiente!
            Autem laborum tempore ducimus debitis quos eius. Vitae similique tempore aliquid cumque consequatur ad, nemo quas placeat corporis repudiandae odio quidem. Est perspiciatis cum beatae dignissimos culpa doloribus sit laboriosam!
            Vero sunt earum, rerum nesciunt beatae id. Aperiam magni excepturi a est. Quisquam dolorum exercitationem tempore! Quas autem, architecto dolor ad, ab numquam non debitis doloribus earum, iusto ipsam consequuntur!
            Eaque sit debitis odio exercitationem beatae nisi pariatur iste, molestiae quod quia cum laudantium vel voluptatibus ducimus recusandae hic libero. Quos sit veritatis debitis tempore, natus magni dolorum quaerat sed!
            Quis modi blanditiis nisi expedita nobis, ab dignissimos vero sequi, eos, optio debitis veritatis minima perferendis. Id ullam, suscipit inventore asperiores voluptate dignissimos exercitationem laudantium expedita incidunt itaque quaerat aliquid.
            Molestias, fugiat neque. Ex, quidem modi recusandae tempora hic, placeat, eum quis voluptatum ipsum doloremque vitae. Ducimus perspiciatis at voluptatibus reiciendis alias doloribus aliquam eos odit, provident, inventore dolores iusto.
            Dicta quidem blanditiis, deserunt iste minus, modi enim delectus error vel quam mollitia earum nostrum molestias placeat, id esse. Illum quasi nisi dolores, commodi vel assumenda libero non. Repudiandae, natus.
            Quas quia ad obcaecati minus laboriosam quasi asperiores voluptate aspernatur aperiam quos praesentium error nihil quo at illo, eveniet cumque libero ratione dolorem delectus repellat id a? Ullam, quos soluta?
            Deserunt expedita impedit dolores hic quia fuga quam distinctio eius, eveniet odit error doloribus praesentium? Perferendis quod excepturi commodi nisi illo ipsa expedita aperiam mollitia labore doloremque optio, libero velit?
            Laudantium aut ullam fugiat illum architecto officia rem aspernatur pariatur sunt voluptates omnis fuga sapiente voluptatem amet voluptatibus accusantium nostrum, repellat deserunt, minima at? Iusto quidem ex blanditiis veniam sequi.
            Officiis repellendus voluptas sit suscipit quaerat veritatis obcaecati illum voluptatum placeat, alias harum amet possimus. Porro accusantium, ut minima dolorum perferendis nemo, quia aut voluptates eaque quam magni fugit consequuntur.
            Corrupti sint saepe nam animi sed perferendis possimus deleniti debitis natus facere nostrum soluta quaerat error cum voluptate quasi reiciendis quo, perspiciatis dolore corporis dolor harum incidunt doloremque quae? Illum?
            Cum, mollitia debitis dolorem in fugit fugiat, voluptatum doloremque ea, alias vitae ex nulla velit enim obcaecati minus id aliquam sunt saepe. Nulla dolorem totam, dicta quis dolore molestias tenetur?
            Omnis fuga odit repellendus eum, sapiente aperiam, pariatur, quisquam accusantium vero officiis corrupti impedit provident! Libero fuga, repudiandae molestias ipsum et ad odit, eligendi, ullam illo ipsa blanditiis! Voluptatibus, soluta.
            Nulla, dolore delectus similique quod eligendi eveniet reprehenderit odit molestiae, ratione accusantium, nemo consectetur et in. Dolor, nam laudantium? Eaque recusandae, eos rerum sed distinctio laboriosam deleniti vitae odio consequuntur?
            Eum blanditiis deleniti sequi modi, est consectetur hic commodi neque exercitationem eos consequuntur corporis enim optio a distinctio laboriosam fuga assumenda ab officia consequatur? Ipsam, ratione? Dignissimos dolorum impedit vero.
            Perferendis vero impedit, laboriosam officiis ab omnis a, id animi error excepturi assumenda soluta sed dolorum, tenetur eaque cupiditate totam! Exercitationem recusandae quidem earum totam vero, omnis cumque accusamus dignissimos?
            Cumque nobis labore inventore quia, amet laborum libero aut aliquid, voluptatibus quod in laboriosam quo dolorum? Aliquam minima vel modi libero ipsam ullam? Officia fuga voluptate magnam dolorum voluptas harum.
            Dolore doloribus, magni laborum maiores quae, est cum eligendi debitis ducimus quod numquam esse iste! Cumque, voluptates exercitationem. Doloremque culpa laborum, deserunt inventore maxime omnis eveniet praesentium explicabo aut a!
            Delectus dolore itaque maiores necessitatibus voluptas dolorem accusamus obcaecati quibusdam, quasi optio a maxime repellendus saepe dolores totam deleniti, sequi quidem molestias, officiis pariatur illo temporibus nobis vitae reprehenderit. Quod!
            Aut quae quasi eos vero rem nam quam placeat quibusdam, tenetur facere ducimus autem, nulla dolorem nemo possimus voluptatum fugiat recusandae veniam facilis beatae. Aut omnis veniam fugiat aperiam officia.
            Natus maxime, ab eaque tempore doloremque, sit molestias modi odio omnis explicabo tenetur. Quas at, blanditiis, suscipit cum distinctio eveniet consequatur modi aut dolor facere incidunt, itaque quod ut sapiente!
            Itaque assumenda totam quidem facere tempore nam ullam vitae, laborum, quae neque nesciunt! Magnam, omnis? Officiis, libero fugit, minima sed veritatis impedit vel, earum cupiditate numquam eum esse sequi nostrum.
            Ea ipsa error tenetur cupiditate quas ipsam id blanditiis, sit ducimus excepturi quasi iste ipsum iusto totam fuga laudantium officia debitis molestias inventore. Numquam eum ipsam accusantium, optio veritatis unde!
            Est quod fuga reprehenderit pariatur. Veritatis quisquam quaerat minima. Mollitia ipsa laudantium pariatur ab, eveniet doloribus recusandae nulla officiis vel ducimus odio error doloremque natus voluptatum. Aperiam voluptate ratione sint.
            Quibusdam magnam ipsum possimus maxime quas facilis, corrupti et! Eius soluta saepe natus odio vel vitae aut! Quia, omnis? Itaque aliquam nesciunt ea fugit eaque dolores tempore maiores optio placeat!
            Commodi quae minima, optio molestiae dolorem ipsa atque. Error dolores laborum similique architecto laudantium illum voluptatem, perspiciatis, amet ipsa, quaerat veniam nobis accusantium dignissimos optio iusto eos. Veritatis, placeat quia.
            Excepturi porro ut ex sint. Possimus reprehenderit veritatis architecto accusamus dignissimos suscipit assumenda a eligendi atque debitis sapiente magnam rem ex fugit ab et, ea nam. Ad veritatis pariatur ipsa?
            Nam quasi a harum voluptatem eaque corrupti maxime, blanditiis et eligendi vitae iste cupiditate, natus ut cum quia voluptatum exercitationem iure ea voluptate fugit reiciendis? Atque iste officiis amet exercitationem?
            Non magni distinctio quis tempora iure consectetur tenetur dolor quasi quia, necessitatibus aliquid officia rerum aut esse explicabo cumque! Repellat aliquam saepe molestiae voluptate facilis excepturi ab laudantium vero? Nulla.
            Perferendis sequi nobis eius adipisci sit corrupti odit veritatis, illo voluptatem in numquam voluptatum fugiat dolores at quo. Tempore accusamus soluta neque sequi, hic incidunt minus porro commodi repudiandae velit?
            Non ea, ullam officiis voluptas dolorum voluptatem sint minus, cum fugiat obcaecati id expedita eaque ab excepturi cumque laboriosam incidunt voluptatibus! Debitis unde soluta blanditiis vel vitae eum officiis animi?
            Totam accusamus ad rem possimus delectus voluptate at ea qui itaque. Dignissimos facilis ut eveniet molestiae. Architecto sint velit odio, vitae ad itaque ipsum nesciunt nobis in explicabo modi nisi?
            Qui ducimus vero veritatis, in eaque maiores, quos similique modi ut suscipit ipsum incidunt sunt delectus quasi ullam repellat enim rerum non. Deserunt nesciunt nostrum deleniti est veritatis et ex!
            Qui sit omnis repellat quas tenetur illum veritatis adipisci sequi eaque nostrum architecto, ut cum, ratione minima corporis non, quasi quibusdam? Eligendi sapiente repellendus nemo ad maiores similique neque aliquam!
            Aliquam illum maiores atque, velit maxime excepturi quas. Vero, omnis itaque, molestiae rerum facere unde distinctio quia, est error magnam ut eius sunt ipsam possimus quos beatae blanditiis reiciendis fugiat.
            Voluptatem maiores consequuntur harum dignissimos, sapiente rem hic sed repellendus laboriosam, ad suscipit aut vitae voluptate nam, tenetur dolores? Ad voluptas, magni incidunt amet omnis cumque asperiores minima vero nemo.
            Error minima in nisi inventore, veritatis autem quisquam officia. Mollitia facere dolores saepe explicabo consequatur natus error modi aliquid hic commodi, eos odit ipsam enim sed culpa tempore. Maiores, suscipit.
            Quis, iusto iure nam vero quam temporibus reprehenderit, porro at ratione harum illum? Nulla quam soluta saepe. Necessitatibus aperiam quisquam, sit ratione praesentium illo vero quos alias aliquid eveniet iure!
            Odio nihil ea corrupti et fuga, quasi sunt, voluptate quia hic ex, libero fugit eveniet! Libero sed voluptatem pariatur in corporis ab perspiciatis? Inventore in excepturi distinctio blanditiis porro rem!
            Maiores dolores, sequi rerum quisquam necessitatibus unde quos expedita aliquid id nemo reprehenderit quis sint voluptatem cumque rem deleniti nostrum natus. Labore iusto nostrum sed in nam iure a error?
            Rerum, sed nam laborum obcaecati, voluptates dicta quia iusto provident aliquam nobis fuga reprehenderit voluptate ab ad vero excepturi corrupti rem. Adipisci ipsa ipsum error corporis nesciunt dolor. Fugiat, aperiam?
            Repellat quos totam enim neque autem sapiente, iste provident? Repellendus odio commodi, accusantium, corporis nihil fugit ab voluptatibus repellat fugiat, ut repudiandae hic suscipit tempore accusamus laborum quidem ducimus dolor?
            Ad enim labore dolores, dolore quis nobis, laboriosam reprehenderit sapiente doloribus sit nam maxime ab nisi cum. Culpa, soluta alias possimus sapiente placeat minima quibusdam aspernatur. Provident aspernatur tenetur quaerat?
            Neque doloribus, assumenda numquam sint a explicabo corporis optio magnam quaerat quibusdam sed, maiores quasi vero similique rem praesentium inventore tenetur dicta quisquam veniam adipisci. Accusamus, earum asperiores. Cumque, perferendis?
            Totam sunt, iste, iusto molestias quam beatae repellendus ea asperiores eius doloribus nam quos officiis sit culpa praesentium dolor! Blanditiis tempore aut totam, voluptatem harum placeat cupiditate nemo a officiis?
            Doloribus blanditiis eum mollitia adipisci magnam, veritatis optio expedita animi quis nulla fuga corporis quo, assumenda ad. Atque mollitia laudantium voluptas eligendi eveniet hic nostrum, magni quia deleniti iure nemo.
            Vero quaerat explicabo eligendi dolore sapiente mollitia itaque porro consectetur odio autem. Cum nisi eum laborum culpa, dolorem repellendus quis aperiam, nemo porro neque ducimus, nihil cupiditate dolor mollitia voluptate.
            Non laudantium velit sed a, tempore voluptatum, eligendi fugiat veniam dolore nulla quaerat earum sint corrupti, molestiae id? Voluptates, consequuntur expedita hic dignissimos placeat magni veritatis optio quo doloremque minima.
            Architecto error vitae veniam fuga incidunt temporibus molestias maxime, saepe accusamus animi veritatis minus sit neque at molestiae nam qui reprehenderit iste est officiis ea eius, provident aut ratione? Odio.
            Voluptatum dolorem nemo quidem sint temporibus sunt aut veritatis soluta architecto. Sed nulla labore aspernatur, inventore incidunt saepe explicabo non illum corrupti, error repellat accusamus blanditiis omnis culpa impedit dolorum.
            Pariatur, molestiae quis. Laudantium inventore consequatur animi? Sequi minus beatae voluptas numquam, doloribus, eum unde porro, at veniam voluptatibus quo commodi illo itaque ut eveniet. Fugiat voluptas veritatis explicabo corrupti.
            Quia nesciunt eum nulla placeat nostrum fuga sed vitae corrupti commodi odio consequatur dolorum expedita molestiae illum cupiditate consectetur voluptatum rerum neque quisquam esse beatae, ea eius quibusdam. Veritatis, nisi.
            Excepturi numquam, mollitia architecto ea quod, veniam doloribus placeat sequi animi molestias quibusdam explicabo sint voluptas sit ab! Quasi impedit eius deleniti repudiandae reprehenderit numquam enim totam facere nobis voluptatibus!
            Dolores voluptatibus magni sint harum nisi corporis necessitatibus eligendi, accusamus dolorem laboriosam illo minima recusandae incidunt esse quo? Molestias harum officiis quae similique ut? Natus, cum! Iusto officiis numquam mollitia.
            Nostrum sunt commodi maiores ipsam, illo dolorem, cumque facere non optio animi beatae voluptatibus, sit asperiores? Quo quibusdam dolor id officiis, inventore laudantium, aliquid asperiores harum dignissimos ipsam praesentium ad!
            Perferendis odio eaque quidem nesciunt, enim quia! Asperiores sint magnam, alias delectus perferendis ipsam ipsum, qui repudiandae nemo eligendi dolores id temporibus aliquam. Tempore nobis dicta quidem ratione enim veritatis.
            Ex eius veritatis molestiae nostrum est, ab magni repudiandae at quibusdam rerum asperiores doloribus explicabo, vero eos iusto illum fuga ratione! Nostrum ullam nemo dolore nesciunt ad accusamus ducimus dolor?
            Quibusdam autem quisquam mollitia voluptas eligendi minus, incidunt ut perferendis magni, nisi, eveniet aut. Consequuntur optio voluptate sapiente repudiandae a ratione facilis illo error aliquid omnis. Quae saepe cupiditate excepturi.
            Dolores atque voluptate esse eum harum dolor sint, rerum blanditiis voluptatum illum, praesentium provident ullam at iure ad ipsum. Minus dolores, maxime ullam beatae quas ratione quibusdam porro nam ducimus.
            Impedit dignissimos ex voluptas hic dolores officiis dolor iste nihil necessitatibus inventore doloribus vel ducimus magni, ullam delectus soluta consequatur tenetur sint dolorum neque blanditiis corporis exercitationem non esse? Ducimus.
            Voluptas reiciendis accusamus minus recusandae fugiat, inventore commodi sit ab deleniti animi sapiente in non ea labore ipsum! Corporis quo hic fuga perspiciatis sed neque, quae unde molestias facere nobis.
            Assumenda pariatur enim odio quasi, totam suscipit sapiente accusamus sit optio ad, sequi consequatur dicta officia? Esse quod excepturi, ratione, quo illum amet accusantium nihil ducimus fugit temporibus commodi deleniti!
            Deserunt ratione inventore omnis! Ab commodi, quae numquam rem quibusdam mollitia vitae iure ipsum aliquam ut, quaerat, officiis voluptate. Quisquam reiciendis pariatur consectetur est accusantium aut, ex molestiae laborum iure!
            Accusantium amet repudiandae consequatur doloremque non, sapiente ut aliquid explicabo fugiat ab! Impedit laudantium perferendis illum, nisi ipsam quibusdam libero quisquam aspernatur quae non numquam minima nam natus facere praesentium!
            Sint numquam voluptas cupiditate! Beatae voluptatem in dolor labore, placeat iusto sit qui sed voluptates excepturi perferendis molestiae voluptate, quo vel autem, ad blanditiis deleniti nesciunt nobis. Aliquam, expedita recusandae!
            Quidem repellat, dolore similique, quia aliquid dignissimos, tempore suscipit aut totam doloremque est ad numquam commodi possimus. Commodi non expedita accusantium fugiat distinctio ratione libero, eum excepturi ad iste quos.
            Iusto temporibus repellat rem ratione! Alias nemo eaque dicta harum. Accusamus, culpa consequatur in hic fuga minima eligendi, incidunt cumque architecto molestiae voluptatibus beatae est dolorem sint, reprehenderit consequuntur rerum?
            Qui, inventore corporis nobis laudantium provident rem saepe. Nesciunt placeat voluptatem iusto aliquam maiores obcaecati eaque saepe, quisquam suscipit amet soluta debitis sed cumque incidunt, similique esse, et voluptate consequatur.
            Voluptatum commodi, ipsum provident esse assumenda tempora dolorum alias asperiores iusto vero veritatis recusandae magni itaque, voluptas facere doloribus illo odio animi dignissimos! Ut consequatur voluptas maiores architecto, cum ipsum?
            Cumque minus voluptatum aliquid, temporibus numquam vel delectus sit tenetur repudiandae impedit similique quidem magni quas. Quod, perspiciatis perferendis distinctio sint architecto autem numquam molestias ipsa minima provident eum culpa.
            Id autem commodi fugiat rem porro hic, molestiae doloremque excepturi corporis tenetur ducimus iusto voluptatibus dolor quo nesciunt aut similique odit sunt, adipisci officia ipsam optio, eum ex. Atque, ipsum.
            Omnis perferendis quam ut culpa deleniti quidem nostrum rem vero molestiae! Rerum, ipsa voluptatibus voluptate minus debitis beatae minima laboriosam modi dolorum dolore quod est laborum nostrum odit eius. Fuga?
            Enim sapiente adipisci labore deserunt dolorem. Praesentium iusto atque vel tempora laborum, explicabo libero corrupti natus sed dolor corporis ipsa inventore mollitia aliquid officia, aspernatur eaque adipisci reprehenderit! Vel, itaque.
            Laudantium ipsam qui nihil quaerat velit, pariatur quidem repudiandae provident, quas sit modi in! Excepturi voluptate totam deserunt aliquid consectetur magni, iure ducimus, facere cum quidem qui, quaerat libero similique!
            Deleniti earum magni odio fugiat aspernatur, quibusdam maxime aliquam enim optio soluta alias perspiciatis molestiae mollitia velit sint fugit dolore, suscipit maiores hic doloribus. Blanditiis ullam voluptatibus quis voluptatum voluptates.
            Vero non repellendus atque alias nobis a repudiandae aperiam illo vitae placeat tempora pariatur facilis neque, nihil praesentium? Molestiae adipisci maxime vel quos commodi, nemo itaque explicabo obcaecati totam dolorum.
            Labore error minus fugit eum saepe voluptatibus et vitae adipisci repudiandae illo nihil consequuntur aperiam omnis nostrum consectetur natus facere eveniet aliquam, illum vero laborum dignissimos, voluptatem sapiente? Sint, dolor!
            Non officia aliquid odit deleniti tenetur, vitae veniam iusto ducimus voluptatum possimus voluptatem laborum sunt animi eligendi! Magni eius autem quis. Eos eveniet vero consequuntur numquam molestias dolore architecto beatae.
            Provident assumenda autem voluptatem quo quae eaque sapiente eos aspernatur libero eveniet, impedit perferendis eum sed incidunt illo error repellendus beatae, repudiandae eius? Aspernatur nostrum eligendi, nam labore asperiores quos.
            Necessitatibus aliquid doloribus corporis labore praesentium, sint veniam aspernatur autem a non consequuntur, doloremque delectus assumenda reiciendis fugiat. Earum consectetur minima dolores similique nostrum voluptatibus consequuntur fugit repellendus asperiores sint?
            Excepturi nulla distinctio inventore necessitatibus. Quibusdam a rem hic recusandae saepe facere tempora pariatur, eligendi optio tenetur sed veritatis fugiat maxime dicta sit itaque minus? Vero accusamus eveniet ea nemo.
            Eligendi neque impedit perferendis, tempore repellendus quis voluptatibus error odio suscipit, consectetur, voluptatum architecto? Beatae pariatur debitis saepe in asperiores numquam exercitationem quas, iure mollitia molestiae ut praesentium voluptate nulla?
            Optio ut aliquam earum vel voluptatibus magnam pariatur quam voluptates quod nisi omnis odio ratione adipisci iste cum voluptas consequuntur, placeat officiis vitae enim fuga dolore minus incidunt nam? Facilis?
            Beatae nulla aliquam earum molestiae, voluptatibus facilis expedita dignissimos eos reiciendis facere inventore accusantium autem mollitia incidunt et? Aliquid iste sunt consequuntur esse, sed natus soluta? Vitae itaque dolores nostrum.
            Aliquam magni praesentium totam odio, exercitationem nisi id ducimus, minima quae iste nobis tempore inventore. Voluptatibus dolorum fugiat quibusdam doloribus assumenda, soluta excepturi? Animi error sequi neque sint qui delectus.
            Voluptatibus quasi omnis pariatur, quod corrupti incidunt reiciendis quae! Eum consectetur voluptatum ratione praesentium ipsa voluptas dolor tempore recusandae iure perferendis. Molestias vel quasi asperiores quia modi, optio a excepturi!
            Incidunt, saepe. Cum ipsam reprehenderit aut, similique laboriosam veniam explicabo tempore eius dolorem corporis quo minima ad provident, tempora illum impedit. Expedita deserunt aliquid ratione tenetur praesentium quasi rem nobis!
            Maiores vitae est veritatis doloribus beatae blanditiis ipsum ratione consectetur! Cupiditate consectetur ipsum excepturi, deserunt nostrum molestias illo incidunt quibusdam atque sit. Odit voluptate eum error quidem totam natus quis.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
