// import * as sp from "astn-handlers-api"

// export type OnInvalidType<PAnnotation> = null | (($: {
//     annotation: Annotation
// }) => void)

// export type IExpectContext<PAnnotation> = {
//     expectSimpleString($: {
//         callback: ($: {
//             token: sp.SimpleStringToken<PAnnotation>
//         }) => void
//     }): sp.IValueHandler<PAnnotation>
//     expectQuotedString($: {
//         callback: ($: {
//             token: sp.SimpleStringToken<PAnnotation>
//         }) => void
//         warningOnly: true
//     }): sp.IValueHandler<PAnnotation>
//     expectNonWrappedString($: {
//         callback: ($: {
//             token: sp.SimpleStringToken<PAnnotation>
//         }) => void
//     }): sp.IValueHandler<PAnnotation>
//     expectDictionary($: {
//         onProperty: ($: {
//             token: sp.SimpleStringToken<PAnnotation>
//         }) => sp.IRequiredValueHandler<PAnnotation>

//     }): sp.IValueHandler<PAnnotation>
//     expectVerboseGroup($: {
//         properties: {
//             [key: string]: {
//                 onExists: ($: {
//                     token: sp.SimpleStringToken<PAnnotation>
//                 }) => sp.IRequiredValueHandler<PAnnotation>
//                 onNotExists: null | (($: {
//                     beginToken: sp.OpenObjectToken<PAnnotation>
//                     endToken: sp.CloseObjectToken<PAnnotation>
//                 }) => void)
//             }
//         }
//         onEnd: ($: {
//             hasErrors: boolean
//             annotation: Annotation
//         }) => void
//     }): sp.IValueHandler<PAnnotation>
//     expectList($: {

//         onElement: () => sp.IValueHandler<PAnnotation>

//     }): sp.IValueHandler<PAnnotation>
//     //expectShorthandGroup($: ExpectShorthandGroupParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
//     //expectGroup($: ExpectGroupParameters<PAnnotation>): sp.IValueHandler<PAnnotation>
//     expectTaggedUnion($: {
//         options: {
//             [key: string]: (
//                 taggedUnionToken: sp.TaggedUnionToken<PAnnotation>,
//                 optionData: sp.SimpleStringToken<PAnnotation>
//             ) => sp.IRequiredValueHandler<PAnnotation>
//         }
//     }): sp.IValueHandler<PAnnotation>
// }
