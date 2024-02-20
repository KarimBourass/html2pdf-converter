import { Router, RouterModule } from '@angular/router';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FilePreviewComponent {
  editorOptions = { language: 'html' };
  code: string = `
  <div style="background-image: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgba(238, 238, 238, 1); border: 1px solid rgba(204, 204, 204, 1); padding: 5px 10px">
<p style="text-align: center"><span style="font-size: 12pt"><span style="font-family: Titillium, sans-serif"><span style="color: rgba(22, 23, 67, 1)"><b>ANNEXE*</b></span></span></span></p>

<p style="text-align: center"><span style="font-size: 12pt"><span style="font-family: Titillium, sans-serif"><span style="color: rgba(22, 23, 67, 1)"><b>ACTE DE CAUTIONNEMENT SOLIDAIRE A DUREE DETERMINEE</b></span></span></span></p>
</div>

<p>* Cette annexe ne s&rsquo;applique pas aux r&eacute;sidents b&eacute;n&eacute;ficiaires de l&rsquo;aide sociale&nbsp;</p>

<p>&nbsp;</p>

<p><b>Le soussign&eacute;&nbsp;:</b></p>

<p>&nbsp;</p>

<p>Nom et Pr&eacute;nom&nbsp;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;~ABS_DEDHEBHOSP~&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.&hellip;.</p>

<p>N&eacute;(e) le&nbsp;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.</p>

<p>Exer&ccedil;ant la profession de&nbsp;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>

<p>Situation familiale&nbsp;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;..</p>

<p>En qualit&eacute; de&nbsp;: (<i>par rapport au r&eacute;sident</i>)</p>

<p>&nbsp;</p>

<p>Si le soussign&eacute; est mari&eacute;<sup><sup>1</sup></sup>&nbsp;:</p>

<p>Nom et Pr&eacute;nom du conjoint&nbsp;&nbsp;:&hellip;&hellip;&hellip;.&hellip;&hellip;.&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.&hellip;&hellip;&hellip;&hellip;&hellip;.&hellip;.</p>

<p>N&eacute;(e) le&nbsp;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>

<p>Exer&ccedil;ant la profession de&nbsp;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;...</p>

<p>Mari&eacute;s sous le r&eacute;gime&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;....</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>Demeurant &agrave; l&rsquo;adresse suivante&nbsp;: N&deg;:&hellip;&hellip;&hellip;Rue&nbsp;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;..</p>

<p>Code postal&nbsp;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;Ville&nbsp;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.</p>

<p>&nbsp;</p>

<p><b>Ci-apr&egrave;s d&eacute;nomm&eacute;e &laquo;&nbsp;La Caution&nbsp;&raquo;</b></p>

<p>&nbsp;</p>

<p>D&eacute;clare se porter caution personnelle aux conditions et termes du pr&eacute;sent acte de&nbsp;:</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>Nom et Pr&eacute;nom&nbsp;: &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.</p>

<p>N&eacute;(e) le&nbsp;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.</p>

<p>Exer&ccedil;ant la profession de&nbsp;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.</p>

<p>Situation familiale&nbsp;:&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>

<p>Demeurant &agrave; l&rsquo;adresse suivante&nbsp;: N&nbsp;:&hellip;&hellip;.Rue&nbsp;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>

<p>Code postal&nbsp;:&hellip;&hellip;&hellip;&hellip;&hellip; Ville&nbsp;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;..</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><b>Ci-apr&egrave;s d&eacute;nomm&eacute; &laquo;&nbsp; Le D&eacute;biteur&nbsp;&raquo;</b></p>

<p>&nbsp;</p>

<p>En faveur de&nbsp;:</p>

<p>&nbsp;</p>

<p>La soci&eacute;t&eacute;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;. au capital de &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;..&hellip;&hellip;&hellip;.. euros, inscrite au Registre du commerce et des soci&eacute;t&eacute;s sous le n&deg;&hellip;&hellip;&hellip;.&hellip;&hellip;&hellip; et dont le si&egrave;ge social est &agrave; &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.</p>

<p>Repr&eacute;sent&eacute;e par M&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.agissant en qualit&eacute; de Directeur de l&rsquo;&eacute;tablissement d&eacute;nomm&eacute;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.. sis&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>

<p>&nbsp;</p>
  
  `;
  htmlContent!: SafeHtml;

  constructor(public sanitizer: DomSanitizer, private router: Router) {
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.code);
  }

  onCodeChanged() {
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.code);
  }

  onBack() {
    this.router.navigate(['/files']);
  }
}
