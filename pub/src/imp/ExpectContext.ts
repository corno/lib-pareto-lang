// import * as sp from "astn-handlers-api"

// export type OnInvalidType<Annotation> = null | (($: {
//     annotation: Annotation
// }) => void)

// export type IExpectContext<Annotation> = {
//     expectSimpleString($: {
//         callback: ($: {
//             token: sp.SimpleStringToken<Annotation>
//         }) => void
//     }): sp.IValueHandler<Annotation>
//     expectQuotedString($: {
//         callback: ($: {
//             token: sp.SimpleStringToken<Annotation>
//         }) => void
//         warningOnly: true
//     }): sp.IValueHandler<Annotation>
//     expectNonWrappedString($: {
//         callback: ($: {
//             token: sp.SimpleStringToken<Annotation>
//         }) => void
//     }): sp.IValueHandler<Annotation>
//     expectDictionary($: {
//         onProperty: ($: {
//             token: sp.SimpleStringToken<Annotation>
//         }) => sp.IRequiredValueHandler<Annotation>

//     }): sp.IValueHandler<Annotation>
//     expectVerboseGroup($: {
//         properties: {
//             [key: string]: {
//                 onExists: ($: {
//                     token: sp.SimpleStringToken<Annotation>
//                 }) => sp.IRequiredValueHandler<Annotation>
//                 onNotExists: null | (($: {
//                     beginToken: sp.OpenObjectToken<Annotation>
//                     endToken: sp.CloseObjectToken<Annotation>
//                 }) => void)
//             }
//         }
//         onEnd: ($: {
//             hasErrors: boolean
//             annotation: Annotation
//         }) => void
//     }): sp.IValueHandler<Annotation>
//     expectList($: {

//         onElement: () => sp.IValueHandler<Annotation>

//     }): sp.IValueHandler<Annotation>
//     //expectShorthandGroup($: ExpectShorthandGroupParameters<Annotation>): sp.IValueHandler<Annotation>
//     //expectGroup($: ExpectGroupParameters<Annotation>): sp.IValueHandler<Annotation>
//     expectTaggedUnion($: {
//         options: {
//             [key: string]: (
//                 taggedUnionToken: sp.TaggedUnionToken<Annotation>,
//                 optionData: sp.SimpleStringToken<Annotation>
//             ) => sp.IRequiredValueHandler<Annotation>
//         }
//     }): sp.IValueHandler<Annotation>
// }
