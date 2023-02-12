// import * as pl from 'pareto-core-lib'

// import * as pm from "pareto-statemachine-core"
// import * as h from "astn-handlers-api"
// import * as aea from "astn-expect-lib"
// import * as t from "../../../interface"

// export function createDeserializer<TokenAnnotation>(
//     context: aea.IExpectContext<TokenAnnotation>,
//     raiseValidationError: (message: string, annotation: TokenAnnotation) => void,
//     callback: (result: t.__root_T) => void,
// ): h.IRequiredValueHandler<TokenAnnotation> {
//     function wrap(handler: h.IValueHandler<TokenAnnotation>): h.IRequiredValueHandler<TokenAnnotation> {
//         return {
//             exists: handler,
//             missing: () => {
//                 //
//             },
//         }
//     }
//     function _generateHandler_builder_procedure_declaration(
//         callback: (out: t.__builder_procedure_declaration_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__builder_procedure_declaration_T) => void) => {
//             const _interfaces_v: { [key: string]: t.__interfaces_T } = {}
//             let _return_type_v: t.__return_type_TU | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "interfaces": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectDictionary({
//                             onProperty: (propertyData) => {
//                                 return wrap(((callback: (out: t.__interfaces_T) => void) => {
//                                     let _interface_v: t.__interface_definition_T | null = null
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "interface": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(_generateHandler_interface_definition(
//                                                     (node) => _interface_v = node
//                                                 )),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_interface_v === null) {
//                                                 _interface_v = {
//                                                     "type": ["group", {
//                                                         "members": pl.createDictionary({}),
//                                                     }],
//                                                 }
//                                             }
//                                             callback({
//                                                 "interface": _interface_v,
//                                             })
//                                         },
//                                     })
//                                 })((node) => _interfaces_v[propertyData.token.token.value] = node))
//                             },
//                         })),
//                     },
//                     "return type": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "interface": () => {
//                                     return wrap(((callback: (out: t.__interface_T) => void) => {
//                                         let _interface_v: t.__interface_definition_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "interface": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_interface_definition(
//                                                         (node) => _interface_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_interface_v === null) {
//                                                     _interface_v = {
//                                                         "type": ["group", {
//                                                             "members": pl.createDictionary({}),
//                                                         }],
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "interface": _interface_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _return_type_v = ["interface", node]))
//                                 },
//                                 "void": () => {
//                                     return wrap(((callback: (out: t.__void_T) => void) => {
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _return_type_v = ["void", node]))
//                                 },
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_return_type_v === null) {
//                         _return_type_v = ["void", {
//                         }]
//                     }
//                     callback({
//                         "interfaces": pl.createDictionary(_interfaces_v),
//                         "return type": _return_type_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_context_selection(
//         callback: (out: t.__context_selection_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__context_selection_T) => void) => {
//             let _start_v: t.__context_start_T | null = null
//             const _steps_v = pm.createArrayBuilder<t.__steps_T>()
//             return context.expectVerboseGroup({
//                 properties: {
//                     "start": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(_generateHandler_context_start(
//                             (node) => _start_v = node
//                         )),
//                     },
//                     "steps": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectList({
//                             onElement: () => {
//                                 return ((callback: (out: t.__steps_T) => void) => {
//                                     let _property_v: string | null = null
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "property": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectQuotedString({
//                                                     warningOnly: true,
//                                                     callback: ($) => {
//                                                         _property_v = $.token.token.value
//                                                     },
//                                                 })),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_property_v === null) {
//                                                 _property_v = "*property*"
//                                             }
//                                             callback({
//                                                 "property": _property_v,
//                                             })
//                                         },
//                                     })
//                                 })((node) => _steps_v.push(node))
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_start_v === null) {
//                         _start_v = {
//                             "start": ["context", {
//                             }],
//                         }
//                     }
//                     callback({
//                         "start": _start_v,
//                         "steps": _steps_v.toArray(),
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_context_start(
//         callback: (out: t.__context_start_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__context_start_T) => void) => {
//             let _start_v: t.__start_TU | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "start": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "context": () => {
//                                     return wrap(((callback: (out: t.__context_T) => void) => {
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _start_v = ["context", node]))
//                                 },
//                                 "function": () => {
//                                     return wrap(((callback: (out: t.__function_T) => void) => {
//                                         let _argument_v: t.__type_expression_T | null = null
//                                         let _context_v: t.__context_TU | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "argument": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_type_expression(
//                                                         (node) => _argument_v = node
//                                                     )),
//                                                 },
//                                                 "context": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectTaggedUnion({
//                                                         options: {
//                                                             "argument": () => {
//                                                                 return wrap(((callback: (out: t.__argument_T) => void) => {
//                                                                     let _function_v: string | null = null
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "function": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(context.expectQuotedString({
//                                                                                     warningOnly: true,
//                                                                                     callback: ($) => {
//                                                                                         _function_v = $.token.token.value
//                                                                                     },
//                                                                                 })),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             if (_function_v === null) {
//                                                                                 _function_v = "*function*"
//                                                                             }
//                                                                             callback({
//                                                                                 "function": _function_v,
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _context_v = ["argument", node]))
//                                                             },
//                                                             "local function": () => {
//                                                                 return wrap(((callback: (out: t.__local_function_T) => void) => {
//                                                                     let _function_v: string | null = null
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "function": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(context.expectQuotedString({
//                                                                                     warningOnly: true,
//                                                                                     callback: ($) => {
//                                                                                         _function_v = $.token.token.value
//                                                                                     },
//                                                                                 })),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             if (_function_v === null) {
//                                                                                 _function_v = "*function*"
//                                                                             }
//                                                                             callback({
//                                                                                 "function": _function_v,
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _context_v = ["local function", node]))
//                                                             },
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_argument_v === null) {
//                                                     _argument_v = {
//                                                         "strategy": ["literal", {
//                                                             "type": ["string", {
//                                                                 "value": "",
//                                                             }],
//                                                         }],
//                                                     }
//                                                 }
//                                                 if (_context_v === null) {
//                                                     _context_v = ["argument", {
//                                                         "function": "*function*",
//                                                     }]
//                                                 }
//                                                 callback({
//                                                     "argument": _argument_v,
//                                                     "context": _context_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _start_v = ["function", node]))
//                                 },
//                                 "marked value": () => {
//                                     return wrap(((callback: (out: t.__marked_value_T) => void) => {
//                                         let _marker_v: string | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "marker": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectQuotedString({
//                                                         warningOnly: true,
//                                                         callback: ($) => {
//                                                             _marker_v = $.token.token.value
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_marker_v === null) {
//                                                     _marker_v = "*marker*"
//                                                 }
//                                                 callback({
//                                                     "marker": _marker_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _start_v = ["marked value", node]))
//                                 },
//                                 "state": () => {
//                                     return wrap(((callback: (out: t.__state_T) => void) => {
//                                         let _state_v: string | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "state": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectQuotedString({
//                                                         warningOnly: true,
//                                                         callback: ($) => {
//                                                             _state_v = $.token.token.value
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_state_v === null) {
//                                                     _state_v = "*state*"
//                                                 }
//                                                 callback({
//                                                     "state": _state_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _start_v = ["state", node]))
//                                 },
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_start_v === null) {
//                         _start_v = ["context", {
//                         }]
//                     }
//                     callback({
//                         "start": _start_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_function_declaration(
//         callback: (out: t.__function_declaration_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__function_declaration_T) => void) => {
//             let _in_v: t.__type_reference_T | null = null
//             let _out_v: t.__type_reference_T | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "in": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(_generateHandler_type_reference(
//                             (node) => _in_v = node
//                         )),
//                     },
//                     "out": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(_generateHandler_type_reference(
//                             (node) => _out_v = node
//                         )),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_in_v === null) {
//                         _in_v = {
//                             "namespace selection": {
//                                 "which": ["current", {
//                                 }],
//                             },
//                             "type": "*type reference*",
//                         }
//                     }
//                     if (_out_v === null) {
//                         _out_v = {
//                             "namespace selection": {
//                                 "which": ["current", {
//                                 }],
//                             },
//                             "type": "*type reference*",
//                         }
//                     }
//                     callback({
//                         "in": _in_v,
//                         "out": _out_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_guaranteed_context_selection(
//         callback: (out: t.__guaranteed_context_selection_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__guaranteed_context_selection_T) => void) => {
//             let _missing_handler_v: t.__missing_handler_T | null = null
//             let _start_v: t.__context_start_T | null = null
//             const _steps_v = pm.createArrayBuilder<t.__steps_guaranteed_context_selection_T>()
//             return context.expectVerboseGroup({
//                 properties: {
//                     "missing handler": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(_generateHandler_missing_handler(
//                             (node) => _missing_handler_v = node
//                         )),
//                     },
//                     "start": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(_generateHandler_context_start(
//                             (node) => _start_v = node
//                         )),
//                     },
//                     "steps": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectList({
//                             onElement: () => {
//                                 return ((callback: (out: t.__steps_guaranteed_context_selection_T) => void) => {
//                                     let _missing_handler_v: t.__missing_handler_T | null = null
//                                     let _property_v: string | null = null
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "missing handler": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(_generateHandler_missing_handler(
//                                                     (node) => _missing_handler_v = node
//                                                 )),
//                                             },
//                                             "property": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectQuotedString({
//                                                     warningOnly: true,
//                                                     callback: ($) => {
//                                                         _property_v = $.token.token.value
//                                                     },
//                                                 })),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_missing_handler_v === null) {
//                                                 _missing_handler_v = {
//                                                     "guaranteed": ["yes", {
//                                                     }],
//                                                 }
//                                             }
//                                             if (_property_v === null) {
//                                                 _property_v = "*property*"
//                                             }
//                                             callback({
//                                                 "missing handler": _missing_handler_v,
//                                                 "property": _property_v,
//                                             })
//                                         },
//                                     })
//                                 })((node) => _steps_v.push(node))
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_missing_handler_v === null) {
//                         _missing_handler_v = {
//                             "guaranteed": ["yes", {
//                             }],
//                         }
//                     }
//                     if (_start_v === null) {
//                         _start_v = {
//                             "start": ["context", {
//                             }],
//                         }
//                     }
//                     callback({
//                         "missing handler": _missing_handler_v,
//                         "start": _start_v,
//                         "steps": _steps_v.toArray(),
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_interface_definition(
//         callback: (out: t.__interface_definition_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__interface_definition_T) => void) => {
//             let _type_v: t.__type_TU | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "type": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "dictionary": () => {
//                                     return wrap(((callback: (out: t.__dictionary_T) => void) => {
//                                         let _entry_v: t.__interface_definition_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "entry": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_interface_definition(
//                                                         (node) => _entry_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_entry_v === null) {
//                                                     _entry_v = {
//                                                         "type": ["group", {
//                                                             "members": pl.createDictionary({}),
//                                                         }],
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "entry": _entry_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["dictionary", node]))
//                                 },
//                                 "group": () => {
//                                     return wrap(((callback: (out: t.__group_T) => void) => {
//                                         const _members_v: { [key: string]: t.__members_T } = {}
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "members": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectDictionary({
//                                                         onProperty: (propertyData) => {
//                                                             return wrap(((callback: (out: t.__members_T) => void) => {
//                                                                 let _definition_v: t.__interface_definition_T | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "definition": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(_generateHandler_interface_definition(
//                                                                                 (node) => _definition_v = node
//                                                                             )),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_definition_v === null) {
//                                                                             _definition_v = {
//                                                                                 "type": ["group", {
//                                                                                     "members": pl.createDictionary({}),
//                                                                                 }],
//                                                                             }
//                                                                         }
//                                                                         callback({
//                                                                             "definition": _definition_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _members_v[propertyData.token.token.value] = node))
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                     "members": pl.createDictionary(_members_v),
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["group", node]))
//                                 },
//                                 "method": () => {
//                                     return wrap(((callback: (out: t.__method_T) => void) => {
//                                         let _return_type_v: t.__return_type_method_TU | null = null
//                                         let _type_v: t.__type_reference_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "return type": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectTaggedUnion({
//                                                         options: {
//                                                             "interface": () => {
//                                                                 return wrap(((callback: (out: t.__interface_return_type_T) => void) => {
//                                                                     let _interface_v: t.__interface_definition_T | null = null
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "interface": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(_generateHandler_interface_definition(
//                                                                                     (node) => _interface_v = node
//                                                                                 )),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             if (_interface_v === null) {
//                                                                                 _interface_v = {
//                                                                                     "type": ["group", {
//                                                                                         "members": pl.createDictionary({}),
//                                                                                     }],
//                                                                                 }
//                                                                             }
//                                                                             callback({
//                                                                                 "interface": _interface_v,
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _return_type_v = ["interface", node]))
//                                                             },
//                                                             "void": () => {
//                                                                 return wrap(((callback: (out: t.__void_return_type_T) => void) => {
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             callback({
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _return_type_v = ["void", node]))
//                                                             },
//                                                         },
//                                                     })),
//                                                 },
//                                                 "type": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_type_reference(
//                                                         (node) => _type_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_return_type_v === null) {
//                                                     _return_type_v = ["void", {
//                                                     }]
//                                                 }
//                                                 if (_type_v === null) {
//                                                     _type_v = {
//                                                         "namespace selection": {
//                                                             "which": ["current", {
//                                                             }],
//                                                         },
//                                                         "type": "*type reference*",
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "return type": _return_type_v,
//                                                     "type": _type_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["method", node]))
//                                 },
//                                 "reference": () => {
//                                     return wrap(((callback: (out: t.__reference_T) => void) => {
//                                         let _interface_v: string | null = null
//                                         let _namespace_selection_v: t.__namespace_selection_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "interface": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectQuotedString({
//                                                         warningOnly: true,
//                                                         callback: ($) => {
//                                                             _interface_v = $.token.token.value
//                                                         },
//                                                     })),
//                                                 },
//                                                 "namespace selection": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_namespace_selection(
//                                                         (node) => _namespace_selection_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_interface_v === null) {
//                                                     _interface_v = "*referenced interface*"
//                                                 }
//                                                 if (_namespace_selection_v === null) {
//                                                     _namespace_selection_v = {
//                                                         "which": ["current", {
//                                                         }],
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "interface": _interface_v,
//                                                     "namespace selection": _namespace_selection_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["reference", node]))
//                                 },
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_type_v === null) {
//                         _type_v = ["group", {
//                             "members": pl.createDictionary({}),
//                         }]
//                     }
//                     callback({
//                         "type": _type_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_interface_expression(
//         callback: (out: t.__interface_expression_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__interface_expression_T) => void) => {
//             let _type_v: t.__type_interface_expression_TU | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "type": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "argument": () => {
//                                     return wrap(((callback: (out: t.__argument_type_T) => void) => {
//                                         let _argument_v: string | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "argument": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectQuotedString({
//                                                         warningOnly: true,
//                                                         callback: ($) => {
//                                                             _argument_v = $.token.token.value
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_argument_v === null) {
//                                                     _argument_v = "*argument*"
//                                                 }
//                                                 callback({
//                                                     "argument": _argument_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["argument", node]))
//                                 },
//                                 "initialize": () => {
//                                     return wrap(((callback: (out: t.__initialize_T) => void) => {
//                                         let _type_v: t.__type_initialize_TU | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "type": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectTaggedUnion({
//                                                         options: {
//                                                             "dictionary": () => {
//                                                                 return wrap(((callback: (out: t.__dictionary_type_T) => void) => {
//                                                                     const _entries_v: { [key: string]: t.__entries_T } = {}
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "entries": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(context.expectDictionary({
//                                                                                     onProperty: (propertyData) => {
//                                                                                         return wrap(((callback: (out: t.__entries_T) => void) => {
//                                                                                             let _expression_v: t.__interface_expression_T | null = null
//                                                                                             return context.expectVerboseGroup({
//                                                                                                 properties: {
//                                                                                                     "expression": {
//                                                                                                         onNotExists: () => { /**/ },
//                                                                                                         onExists: () => wrap(_generateHandler_interface_expression(
//                                                                                                             (node) => _expression_v = node
//                                                                                                         )),
//                                                                                                     },
//                                                                                                 },
//                                                                                                 onEnd: () => {
//                                                                                                     if (_expression_v === null) {
//                                                                                                         _expression_v = {
//                                                                                                             "type": ["initialize", {
//                                                                                                                 "type": ["method", {
//                                                                                                                     "strategy": ["procedure implementation", {
//                                                                                                                         "block": {
//                                                                                                                             "effects": pl.createArray([]),
//                                                                                                                             "markers": pl.createDictionary({}),
//                                                                                                                             "nested procedures": pl.createDictionary({}),
//                                                                                                                             "return value": ["void", {
//                                                                                                                             }],
//                                                                                                                             "states": pl.createDictionary({}),
//                                                                                                                         },
//                                                                                                                     }],
//                                                                                                                 }],
//                                                                                                             }],
//                                                                                                         }
//                                                                                                     }
//                                                                                                     callback({
//                                                                                                         "expression": _expression_v,
//                                                                                                     })
//                                                                                                 },
//                                                                                             })
//                                                                                         })((node) => _entries_v[propertyData.token.token.value] = node))
//                                                                                     },
//                                                                                 })),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             callback({
//                                                                                 "entries": pl.createDictionary(_entries_v),
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["dictionary", node]))
//                                                             },
//                                                             "group": () => {
//                                                                 return wrap(((callback: (out: t.__group_type_T) => void) => {
//                                                                     let _strategy_v: t.__strategy_TU | null = null
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "strategy": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(context.expectTaggedUnion({
//                                                                                     options: {
//                                                                                         "inline": () => {
//                                                                                             return wrap(((callback: (out: t.__inline_T) => void) => {
//                                                                                                 const _members_v: { [key: string]: t.__members_inline_T } = {}
//                                                                                                 return context.expectVerboseGroup({
//                                                                                                     properties: {
//                                                                                                         "members": {
//                                                                                                             onNotExists: () => { /**/ },
//                                                                                                             onExists: () => wrap(context.expectDictionary({
//                                                                                                                 onProperty: (propertyData) => {
//                                                                                                                     return wrap(((callback: (out: t.__members_inline_T) => void) => {
//                                                                                                                         let _expression_v: t.__interface_expression_T | null = null
//                                                                                                                         return context.expectVerboseGroup({
//                                                                                                                             properties: {
//                                                                                                                                 "expression": {
//                                                                                                                                     onNotExists: () => { /**/ },
//                                                                                                                                     onExists: () => wrap(_generateHandler_interface_expression(
//                                                                                                                                         (node) => _expression_v = node
//                                                                                                                                     )),
//                                                                                                                                 },
//                                                                                                                             },
//                                                                                                                             onEnd: () => {
//                                                                                                                                 if (_expression_v === null) {
//                                                                                                                                     _expression_v = {
//                                                                                                                                         "type": ["initialize", {
//                                                                                                                                             "type": ["method", {
//                                                                                                                                                 "strategy": ["procedure implementation", {
//                                                                                                                                                     "block": {
//                                                                                                                                                         "effects": pl.createArray([]),
//                                                                                                                                                         "markers": pl.createDictionary({}),
//                                                                                                                                                         "nested procedures": pl.createDictionary({}),
//                                                                                                                                                         "return value": ["void", {
//                                                                                                                                                         }],
//                                                                                                                                                         "states": pl.createDictionary({}),
//                                                                                                                                                     },
//                                                                                                                                                 }],
//                                                                                                                                             }],
//                                                                                                                                         }],
//                                                                                                                                     }
//                                                                                                                                 }
//                                                                                                                                 callback({
//                                                                                                                                     "expression": _expression_v,
//                                                                                                                                 })
//                                                                                                                             },
//                                                                                                                         })
//                                                                                                                     })((node) => _members_v[propertyData.token.token.value] = node))
//                                                                                                                 },
//                                                                                                             })),
//                                                                                                         },
//                                                                                                     },
//                                                                                                     onEnd: () => {
//                                                                                                         callback({
//                                                                                                             "members": pl.createDictionary(_members_v),
//                                                                                                         })
//                                                                                                     },
//                                                                                                 })
//                                                                                             })((node) => _strategy_v = ["inline", node]))
//                                                                                         },
//                                                                                     },
//                                                                                 })),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             if (_strategy_v === null) {
//                                                                                 _strategy_v = ["inline", {
//                                                                                     "members": pl.createDictionary({}),
//                                                                                 }]
//                                                                             }
//                                                                             callback({
//                                                                                 "strategy": _strategy_v,
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["group", node]))
//                                                             },
//                                                             "method": () => {
//                                                                 return wrap(((callback: (out: t.__method_type_T) => void) => {
//                                                                     let _strategy_v: t.__strategy_method_TU | null = null
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "strategy": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(context.expectTaggedUnion({
//                                                                                     options: {
//                                                                                         "argument": () => {
//                                                                                             return wrap(((callback: (out: t.__argument_strategy_T) => void) => {
//                                                                                                 let _argument_v: string | null = null
//                                                                                                 return context.expectVerboseGroup({
//                                                                                                     properties: {
//                                                                                                         "argument": {
//                                                                                                             onNotExists: () => { /**/ },
//                                                                                                             onExists: () => wrap(context.expectQuotedString({
//                                                                                                                 warningOnly: true,
//                                                                                                                 callback: ($) => {
//                                                                                                                     _argument_v = $.token.token.value
//                                                                                                                 },
//                                                                                                             })),
//                                                                                                         },
//                                                                                                     },
//                                                                                                     onEnd: () => {
//                                                                                                         if (_argument_v === null) {
//                                                                                                             _argument_v = "*argument*"
//                                                                                                         }
//                                                                                                         callback({
//                                                                                                             "argument": _argument_v,
//                                                                                                         })
//                                                                                                     },
//                                                                                                 })
//                                                                                             })((node) => _strategy_v = ["argument", node]))
//                                                                                         },
//                                                                                         "inline procedure": () => {
//                                                                                             return wrap(((callback: (out: t.__inline_procedure_T) => void) => {
//                                                                                                 let _call_v: t.__procedure_call_T | null = null
//                                                                                                 let _specification_v: t.__internal_procedure_specification_T | null = null
//                                                                                                 return context.expectVerboseGroup({
//                                                                                                     properties: {
//                                                                                                         "call": {
//                                                                                                             onNotExists: () => { /**/ },
//                                                                                                             onExists: () => wrap(_generateHandler_procedure_call(
//                                                                                                                 (node) => _call_v = node
//                                                                                                             )),
//                                                                                                         },
//                                                                                                         "specification": {
//                                                                                                             onNotExists: () => { /**/ },
//                                                                                                             onExists: () => wrap(_generateHandler_internal_procedure_specification(
//                                                                                                                 (node) => _specification_v = node
//                                                                                                             )),
//                                                                                                         },
//                                                                                                     },
//                                                                                                     onEnd: () => {
//                                                                                                         if (_call_v === null) {
//                                                                                                             _call_v = {
//                                                                                                                 "interface arguments": pl.createDictionary({}),
//                                                                                                             }
//                                                                                                         }
//                                                                                                         if (_specification_v === null) {
//                                                                                                             _specification_v = {
//                                                                                                                 "block": {
//                                                                                                                     "effects": pl.createArray([]),
//                                                                                                                     "markers": pl.createDictionary({}),
//                                                                                                                     "nested procedures": pl.createDictionary({}),
//                                                                                                                     "return value": ["void", {
//                                                                                                                     }],
//                                                                                                                     "states": pl.createDictionary({}),
//                                                                                                                 },
//                                                                                                                 "parameters": pl.createDictionary({}),
//                                                                                                                 "return type": ["void", {
//                                                                                                                 }],
//                                                                                                             }
//                                                                                                         }
//                                                                                                         callback({
//                                                                                                             "call": _call_v,
//                                                                                                             "specification": _specification_v,
//                                                                                                         })
//                                                                                                     },
//                                                                                                 })
//                                                                                             })((node) => _strategy_v = ["inline procedure", node]))
//                                                                                         },
//                                                                                         "procedure implementation": () => {
//                                                                                             return wrap(((callback: (out: t.__procedure_implementation_T) => void) => {
//                                                                                                 let _block_v: t.__procedure_block_T | null = null
//                                                                                                 return context.expectVerboseGroup({
//                                                                                                     properties: {
//                                                                                                         "block": {
//                                                                                                             onNotExists: () => { /**/ },
//                                                                                                             onExists: () => wrap(_generateHandler_procedure_block(
//                                                                                                                 (node) => _block_v = node
//                                                                                                             )),
//                                                                                                         },
//                                                                                                     },
//                                                                                                     onEnd: () => {
//                                                                                                         if (_block_v === null) {
//                                                                                                             _block_v = {
//                                                                                                                 "effects": pl.createArray([]),
//                                                                                                                 "markers": pl.createDictionary({}),
//                                                                                                                 "nested procedures": pl.createDictionary({}),
//                                                                                                                 "return value": ["void", {
//                                                                                                                 }],
//                                                                                                                 "states": pl.createDictionary({}),
//                                                                                                             }
//                                                                                                         }
//                                                                                                         callback({
//                                                                                                             "block": _block_v,
//                                                                                                         })
//                                                                                                     },
//                                                                                                 })
//                                                                                             })((node) => _strategy_v = ["procedure implementation", node]))
//                                                                                         },
//                                                                                     },
//                                                                                 })),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             if (_strategy_v === null) {
//                                                                                 _strategy_v = ["procedure implementation", {
//                                                                                     "block": {
//                                                                                         "effects": pl.createArray([]),
//                                                                                         "markers": pl.createDictionary({}),
//                                                                                         "nested procedures": pl.createDictionary({}),
//                                                                                         "return value": ["void", {
//                                                                                         }],
//                                                                                         "states": pl.createDictionary({}),
//                                                                                     },
//                                                                                 }]
//                                                                             }
//                                                                             callback({
//                                                                                 "strategy": _strategy_v,
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["method", node]))
//                                                             },
//                                                             "reference": () => {
//                                                                 return wrap(((callback: (out: t.__reference_type_T) => void) => {
//                                                                     let _strategy_v: t.__strategy_reference_TU | null = null
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "strategy": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(context.expectTaggedUnion({
//                                                                                     options: {
//                                                                                         "procedure call6": () => {
//                                                                                             return wrap(((callback: (out: t.__procedure_call6_T) => void) => {
//                                                                                                 let _procedure_call_v: t.__named_procedure_call_T | null = null
//                                                                                                 return context.expectVerboseGroup({
//                                                                                                     properties: {
//                                                                                                         "procedure call": {
//                                                                                                             onNotExists: () => { /**/ },
//                                                                                                             onExists: () => wrap(_generateHandler_named_procedure_call(
//                                                                                                                 (node) => _procedure_call_v = node
//                                                                                                             )),
//                                                                                                         },
//                                                                                                     },
//                                                                                                     onEnd: () => {
//                                                                                                         if (_procedure_call_v === null) {
//                                                                                                             _procedure_call_v = {
//                                                                                                                 "procedure call": {
//                                                                                                                     "interface arguments": pl.createDictionary({}),
//                                                                                                                 },
//                                                                                                                 "type": ["local", {
//                                                                                                                     "procedure": "*procedure*",
//                                                                                                                 }],
//                                                                                                             }
//                                                                                                         }
//                                                                                                         callback({
//                                                                                                             "procedure call": _procedure_call_v,
//                                                                                                         })
//                                                                                                     },
//                                                                                                 })
//                                                                                             })((node) => _strategy_v = ["procedure call6", node]))
//                                                                                         },
//                                                                                     },
//                                                                                 })),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             if (_strategy_v === null) {
//                                                                                 _strategy_v = ["procedure call6", {
//                                                                                     "procedure call": {
//                                                                                         "procedure call": {
//                                                                                             "interface arguments": pl.createDictionary({}),
//                                                                                         },
//                                                                                         "type": ["local", {
//                                                                                             "procedure": "*procedure*",
//                                                                                         }],
//                                                                                     },
//                                                                                 }]
//                                                                             }
//                                                                             callback({
//                                                                                 "strategy": _strategy_v,
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["reference", node]))
//                                                             },
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_type_v === null) {
//                                                     _type_v = ["method", {
//                                                         "strategy": ["procedure implementation", {
//                                                             "block": {
//                                                                 "effects": pl.createArray([]),
//                                                                 "markers": pl.createDictionary({}),
//                                                                 "nested procedures": pl.createDictionary({}),
//                                                                 "return value": ["void", {
//                                                                 }],
//                                                                 "states": pl.createDictionary({}),
//                                                             },
//                                                         }],
//                                                     }]
//                                                 }
//                                                 callback({
//                                                     "type": _type_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["initialize", node]))
//                                 },
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_type_v === null) {
//                         _type_v = ["initialize", {
//                             "type": ["method", {
//                                 "strategy": ["procedure implementation", {
//                                     "block": {
//                                         "effects": pl.createArray([]),
//                                         "markers": pl.createDictionary({}),
//                                         "nested procedures": pl.createDictionary({}),
//                                         "return value": ["void", {
//                                         }],
//                                         "states": pl.createDictionary({}),
//                                     },
//                                 }],
//                             }],
//                         }]
//                     }
//                     callback({
//                         "type": _type_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_internal_procedure_specification(
//         callback: (out: t.__internal_procedure_specification_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__internal_procedure_specification_T) => void) => {
//             let _block_v: t.__procedure_block_T | null = null
//             const _parameters_v: { [key: string]: t.__parameters_T } = {}
//             let _return_type_v: t.__return_type_internal_procedure_specification_TU | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "block": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(_generateHandler_procedure_block(
//                             (node) => _block_v = node
//                         )),
//                     },
//                     "parameters": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectDictionary({
//                             onProperty: (propertyData) => {
//                                 return wrap(((callback: (out: t.__parameters_T) => void) => {
//                                     let _type_v: t.__type_parameters_TU | null = null
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "type": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectTaggedUnion({
//                                                     options: {
//                                                         "group": () => {
//                                                             return wrap(((callback: (out: t.__group_type_parameters_T) => void) => {
//                                                                 const _members_v: { [key: string]: t.__members_group_T } = {}
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "members": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(context.expectDictionary({
//                                                                                 onProperty: (propertyData) => {
//                                                                                     return wrap(((callback: (out: t.__members_group_T) => void) => {
//                                                                                         let _definition_v: t.__interface_definition_T | null = null
//                                                                                         return context.expectVerboseGroup({
//                                                                                             properties: {
//                                                                                                 "definition": {
//                                                                                                     onNotExists: () => { /**/ },
//                                                                                                     onExists: () => wrap(_generateHandler_interface_definition(
//                                                                                                         (node) => _definition_v = node
//                                                                                                     )),
//                                                                                                 },
//                                                                                             },
//                                                                                             onEnd: () => {
//                                                                                                 if (_definition_v === null) {
//                                                                                                     _definition_v = {
//                                                                                                         "type": ["group", {
//                                                                                                             "members": pl.createDictionary({}),
//                                                                                                         }],
//                                                                                                     }
//                                                                                                 }
//                                                                                                 callback({
//                                                                                                     "definition": _definition_v,
//                                                                                                 })
//                                                                                             },
//                                                                                         })
//                                                                                     })((node) => _members_v[propertyData.token.token.value] = node))
//                                                                                 },
//                                                                             })),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         callback({
//                                                                             "members": pl.createDictionary(_members_v),
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["group", node]))
//                                                         },
//                                                         "method": () => {
//                                                             return wrap(((callback: (out: t.__method_type_parameters_T) => void) => {
//                                                                 let _return_type_v: t.__return_type_method_type_TU | null = null
//                                                                 let _type_v: t.__nested_type_reference_T | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "return type": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(context.expectTaggedUnion({
//                                                                                 options: {
//                                                                                     "interface": () => {
//                                                                                         return wrap(((callback: (out: t.__interface_return_type_method_T) => void) => {
//                                                                                             let _interface_v: t.__interface_definition_T | null = null
//                                                                                             return context.expectVerboseGroup({
//                                                                                                 properties: {
//                                                                                                     "interface": {
//                                                                                                         onNotExists: () => { /**/ },
//                                                                                                         onExists: () => wrap(_generateHandler_interface_definition(
//                                                                                                             (node) => _interface_v = node
//                                                                                                         )),
//                                                                                                     },
//                                                                                                 },
//                                                                                                 onEnd: () => {
//                                                                                                     if (_interface_v === null) {
//                                                                                                         _interface_v = {
//                                                                                                             "type": ["group", {
//                                                                                                                 "members": pl.createDictionary({}),
//                                                                                                             }],
//                                                                                                         }
//                                                                                                     }
//                                                                                                     callback({
//                                                                                                         "interface": _interface_v,
//                                                                                                     })
//                                                                                                 },
//                                                                                             })
//                                                                                         })((node) => _return_type_v = ["interface", node]))
//                                                                                     },
//                                                                                     "void": () => {
//                                                                                         return wrap(((callback: (out: t.__void_return_type_method_T) => void) => {
//                                                                                             return context.expectVerboseGroup({
//                                                                                                 properties: {
//                                                                                                 },
//                                                                                                 onEnd: () => {
//                                                                                                     callback({
//                                                                                                     })
//                                                                                                 },
//                                                                                             })
//                                                                                         })((node) => _return_type_v = ["void", node]))
//                                                                                     },
//                                                                                 },
//                                                                             })),
//                                                                         },
//                                                                         "type": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(_generateHandler_nested_type_reference(
//                                                                                 (node) => _type_v = node
//                                                                             )),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_return_type_v === null) {
//                                                                             _return_type_v = ["void", {
//                                                                             }]
//                                                                         }
//                                                                         if (_type_v === null) {
//                                                                             _type_v = {
//                                                                                 "namespace reference": {
//                                                                                     "namespace": "*namespace*",
//                                                                                     "type arguments": pl.createDictionary({}),
//                                                                                 },
//                                                                                 "steps": pl.createArray([]),
//                                                                                 "type": "*type reference*",
//                                                                             }
//                                                                         }
//                                                                         callback({
//                                                                             "return type": _return_type_v,
//                                                                             "type": _type_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["method", node]))
//                                                         },
//                                                         "reference": () => {
//                                                             return wrap(((callback: (out: t.__reference_type_parameters_T) => void) => {
//                                                                 let _interface_v: string | null = null
//                                                                 let _namespace_selection_v: t.__namespace_selection_T | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "interface": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(context.expectQuotedString({
//                                                                                 warningOnly: true,
//                                                                                 callback: ($) => {
//                                                                                     _interface_v = $.token.token.value
//                                                                                 },
//                                                                             })),
//                                                                         },
//                                                                         "namespace selection": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(_generateHandler_namespace_selection(
//                                                                                 (node) => _namespace_selection_v = node
//                                                                             )),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_interface_v === null) {
//                                                                             _interface_v = "*referenced interface*"
//                                                                         }
//                                                                         if (_namespace_selection_v === null) {
//                                                                             _namespace_selection_v = {
//                                                                                 "which": ["current", {
//                                                                                 }],
//                                                                             }
//                                                                         }
//                                                                         callback({
//                                                                             "interface": _interface_v,
//                                                                             "namespace selection": _namespace_selection_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["reference", node]))
//                                                         },
//                                                     },
//                                                 })),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_type_v === null) {
//                                                 _type_v = ["group", {
//                                                     "members": pl.createDictionary({}),
//                                                 }]
//                                             }
//                                             callback({
//                                                 "type": _type_v,
//                                             })
//                                         },
//                                     })
//                                 })((node) => _parameters_v[propertyData.token.token.value] = node))
//                             },
//                         })),
//                     },
//                     "return type": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "interface": () => {
//                                     return wrap(((callback: (out: t.__interface_return_type_internal_procedure_specification_T) => void) => {
//                                         let _interface_v: t.__interface_definition_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "interface": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_interface_definition(
//                                                         (node) => _interface_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_interface_v === null) {
//                                                     _interface_v = {
//                                                         "type": ["group", {
//                                                             "members": pl.createDictionary({}),
//                                                         }],
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "interface": _interface_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _return_type_v = ["interface", node]))
//                                 },
//                                 "void": () => {
//                                     return wrap(((callback: (out: t.__void_return_type_internal_procedure_specification_T) => void) => {
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _return_type_v = ["void", node]))
//                                 },
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_block_v === null) {
//                         _block_v = {
//                             "effects": pl.createArray([]),
//                             "markers": pl.createDictionary({}),
//                             "nested procedures": pl.createDictionary({}),
//                             "return value": ["void", {
//                             }],
//                             "states": pl.createDictionary({}),
//                         }
//                     }
//                     if (_return_type_v === null) {
//                         _return_type_v = ["void", {
//                         }]
//                     }
//                     callback({
//                         "block": _block_v,
//                         "parameters": pl.createDictionary(_parameters_v),
//                         "return type": _return_type_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_missing_handler(
//         callback: (out: t.__missing_handler_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__missing_handler_T) => void) => {
//             let _guaranteed_v: t.__guaranteed_TU | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "guaranteed": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "no": () => {
//                                     return wrap(((callback: (out: t.__no_T) => void) => {
//                                         let _on_missing_v: t.__type_expression_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "on missing": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_type_expression(
//                                                         (node) => _on_missing_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_on_missing_v === null) {
//                                                     _on_missing_v = {
//                                                         "strategy": ["literal", {
//                                                             "type": ["string", {
//                                                                 "value": "",
//                                                             }],
//                                                         }],
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "on missing": _on_missing_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _guaranteed_v = ["no", node]))
//                                 },
//                                 "yes": () => {
//                                     return wrap(((callback: (out: t.__yes_T) => void) => {
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _guaranteed_v = ["yes", node]))
//                                 },
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_guaranteed_v === null) {
//                         _guaranteed_v = ["yes", {
//                         }]
//                     }
//                     callback({
//                         "guaranteed": _guaranteed_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_named_procedure_call(
//         callback: (out: t.__named_procedure_call_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__named_procedure_call_T) => void) => {
//             let _procedure_call_v: t.__procedure_call_T | null = null
//             let _type_v: t.__type_named_procedure_call_TU | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "procedure call": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(_generateHandler_procedure_call(
//                             (node) => _procedure_call_v = node
//                         )),
//                     },
//                     "type": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "external": () => {
//                                     return wrap(((callback: (out: t.__external_T) => void) => {
//                                         let _builder_v: string | null = null
//                                         let _method_v: string | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "builder": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectQuotedString({
//                                                         warningOnly: true,
//                                                         callback: ($) => {
//                                                             _builder_v = $.token.token.value
//                                                         },
//                                                     })),
//                                                 },
//                                                 "method": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectQuotedString({
//                                                         warningOnly: true,
//                                                         callback: ($) => {
//                                                             _method_v = $.token.token.value
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_builder_v === null) {
//                                                     _builder_v = "*builder*"
//                                                 }
//                                                 if (_method_v === null) {
//                                                     _method_v = "*method*"
//                                                 }
//                                                 callback({
//                                                     "builder": _builder_v,
//                                                     "method": _method_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["external", node]))
//                                 },
//                                 "local": () => {
//                                     return wrap(((callback: (out: t.__local_T) => void) => {
//                                         let _procedure_v: string | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "procedure": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectQuotedString({
//                                                         warningOnly: true,
//                                                         callback: ($) => {
//                                                             _procedure_v = $.token.token.value
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_procedure_v === null) {
//                                                     _procedure_v = "*procedure*"
//                                                 }
//                                                 callback({
//                                                     "procedure": _procedure_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["local", node]))
//                                 },
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_procedure_call_v === null) {
//                         _procedure_call_v = {
//                             "interface arguments": pl.createDictionary({}),
//                         }
//                     }
//                     if (_type_v === null) {
//                         _type_v = ["local", {
//                             "procedure": "*procedure*",
//                         }]
//                     }
//                     callback({
//                         "procedure call": _procedure_call_v,
//                         "type": _type_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_namespace_reference(
//         callback: (out: t.__namespace_reference_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__namespace_reference_T) => void) => {
//             let _namespace_v: string | null = null
//             const _type_arguments_v: { [key: string]: t.__type_arguments_T } = {}
//             return context.expectVerboseGroup({
//                 properties: {
//                     "namespace": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectQuotedString({
//                             warningOnly: true,
//                             callback: ($) => {
//                                 _namespace_v = $.token.token.value
//                             },
//                         })),
//                     },
//                     "type arguments": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectDictionary({
//                             onProperty: (propertyData) => {
//                                 return wrap(((callback: (out: t.__type_arguments_T) => void) => {
//                                     let _type_v: string | null = null
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "type": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectQuotedString({
//                                                     warningOnly: true,
//                                                     callback: ($) => {
//                                                         _type_v = $.token.token.value
//                                                     },
//                                                 })),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_type_v === null) {
//                                                 _type_v = "*type argument type*"
//                                             }
//                                             callback({
//                                                 "type": _type_v,
//                                             })
//                                         },
//                                     })
//                                 })((node) => _type_arguments_v[propertyData.token.token.value] = node))
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_namespace_v === null) {
//                         _namespace_v = "*namespace*"
//                     }
//                     callback({
//                         "namespace": _namespace_v,
//                         "type arguments": pl.createDictionary(_type_arguments_v),
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_namespace_selection(
//         callback: (out: t.__namespace_selection_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__namespace_selection_T) => void) => {
//             let _which_v: t.__which_TU | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "which": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "current": () => {
//                                     return wrap(((callback: (out: t.__current_T) => void) => {
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _which_v = ["current", node]))
//                                 },
//                                 "other": () => {
//                                     return wrap(((callback: (out: t.__other_T) => void) => {
//                                         let _namespace_reference_v: t.__namespace_reference_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "namespace reference": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_namespace_reference(
//                                                         (node) => _namespace_reference_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_namespace_reference_v === null) {
//                                                     _namespace_reference_v = {
//                                                         "namespace": "*namespace*",
//                                                         "type arguments": pl.createDictionary({}),
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "namespace reference": _namespace_reference_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _which_v = ["other", node]))
//                                 },
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_which_v === null) {
//                         _which_v = ["current", {
//                         }]
//                     }
//                     callback({
//                         "which": _which_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_nested_type_reference(
//         callback: (out: t.__nested_type_reference_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__nested_type_reference_T) => void) => {
//             let _namespace_reference_v: t.__namespace_reference_T | null = null
//             const _steps_v = pm.createArrayBuilder<t.__steps_nested_type_reference_T>()
//             let _type_v: string | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "namespace reference": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(_generateHandler_namespace_reference(
//                             (node) => _namespace_reference_v = node
//                         )),
//                     },
//                     "steps": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectList({
//                             onElement: () => {
//                                 return ((callback: (out: t.__steps_nested_type_reference_T) => void) => {
//                                     let _type_v: t.__type_steps_TU | null = null
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "type": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectTaggedUnion({
//                                                     options: {
//                                                         "dictionary": () => {
//                                                             return wrap(((callback: (out: t.__dictionary_type_steps_T) => void) => {
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         callback({
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["dictionary", node]))
//                                                         },
//                                                         "group": () => {
//                                                             return wrap(((callback: (out: t.__group_type_steps_T) => void) => {
//                                                                 let _property_v: string | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "property": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(context.expectQuotedString({
//                                                                                 warningOnly: true,
//                                                                                 callback: ($) => {
//                                                                                     _property_v = $.token.token.value
//                                                                                 },
//                                                                             })),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_property_v === null) {
//                                                                             _property_v = "*property*"
//                                                                         }
//                                                                         callback({
//                                                                             "property": _property_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["group", node]))
//                                                         },
//                                                         "list": () => {
//                                                             return wrap(((callback: (out: t.__list_T) => void) => {
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         callback({
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["list", node]))
//                                                         },
//                                                         "tagged union option": () => {
//                                                             return wrap(((callback: (out: t.__tagged_union_option_T) => void) => {
//                                                                 let _option_v: string | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "option": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(context.expectQuotedString({
//                                                                                 warningOnly: true,
//                                                                                 callback: ($) => {
//                                                                                     _option_v = $.token.token.value
//                                                                                 },
//                                                                             })),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_option_v === null) {
//                                                                             _option_v = "*option*"
//                                                                         }
//                                                                         callback({
//                                                                             "option": _option_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["tagged union option", node]))
//                                                         },
//                                                     },
//                                                 })),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_type_v === null) {
//                                                 _type_v = ["dictionary", {
//                                                 }]
//                                             }
//                                             callback({
//                                                 "type": _type_v,
//                                             })
//                                         },
//                                     })
//                                 })((node) => _steps_v.push(node))
//                             },
//                         })),
//                     },
//                     "type": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectQuotedString({
//                             warningOnly: true,
//                             callback: ($) => {
//                                 _type_v = $.token.token.value
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_namespace_reference_v === null) {
//                         _namespace_reference_v = {
//                             "namespace": "*namespace*",
//                             "type arguments": pl.createDictionary({}),
//                         }
//                     }
//                     if (_type_v === null) {
//                         _type_v = "*type reference*"
//                     }
//                     callback({
//                         "namespace reference": _namespace_reference_v,
//                         "steps": _steps_v.toArray(),
//                         "type": _type_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_procedure_block(
//         callback: (out: t.__procedure_block_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__procedure_block_T) => void) => {
//             const _effects_v = pm.createArrayBuilder<t.__effects_T>()
//             const _markers_v: { [key: string]: t.__markers_T } = {}
//             const _nested_procedures_v: { [key: string]: t.__nested_procedures_T } = {}
//             let _return_value_v: t.__return_value_TU | null = null
//             const _states_v: { [key: string]: t.__states_T } = {}
//             return context.expectVerboseGroup({
//                 properties: {
//                     "effects": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectList({
//                             onElement: () => {
//                                 return ((callback: (out: t.__effects_T) => void) => {
//                                     let _type_v: t.__type_effects_TU | null = null
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "type": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectTaggedUnion({
//                                                     options: {
//                                                         "external interface call": () => {
//                                                             return wrap(((callback: (out: t.__external_interface_call_T) => void) => {
//                                                                 let _expression_v: t.__type_expression_T | null = null
//                                                                 let _interface_v: string | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "expression": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(_generateHandler_type_expression(
//                                                                                 (node) => _expression_v = node
//                                                                             )),
//                                                                         },
//                                                                         "interface": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(context.expectQuotedString({
//                                                                                 warningOnly: true,
//                                                                                 callback: ($) => {
//                                                                                     _interface_v = $.token.token.value
//                                                                                 },
//                                                                             })),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_expression_v === null) {
//                                                                             _expression_v = {
//                                                                                 "strategy": ["literal", {
//                                                                                     "type": ["string", {
//                                                                                         "value": "",
//                                                                                     }],
//                                                                                 }],
//                                                                             }
//                                                                         }
//                                                                         if (_interface_v === null) {
//                                                                             _interface_v = "*interface*"
//                                                                         }
//                                                                         callback({
//                                                                             "expression": _expression_v,
//                                                                             "interface": _interface_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["external interface call", node]))
//                                                         },
//                                                         "internal interface call": () => {
//                                                             return wrap(((callback: (out: t.__internal_interface_call_T) => void) => {
//                                                                 let _expression_v: t.__type_expression_T | null = null
//                                                                 let _interface_v: string | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "expression": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(_generateHandler_type_expression(
//                                                                                 (node) => _expression_v = node
//                                                                             )),
//                                                                         },
//                                                                         "interface": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(context.expectQuotedString({
//                                                                                 warningOnly: true,
//                                                                                 callback: ($) => {
//                                                                                     _interface_v = $.token.token.value
//                                                                                 },
//                                                                             })),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_expression_v === null) {
//                                                                             _expression_v = {
//                                                                                 "strategy": ["literal", {
//                                                                                     "type": ["string", {
//                                                                                         "value": "",
//                                                                                     }],
//                                                                                 }],
//                                                                             }
//                                                                         }
//                                                                         if (_interface_v === null) {
//                                                                             _interface_v = "*interface*"
//                                                                         }
//                                                                         callback({
//                                                                             "expression": _expression_v,
//                                                                             "interface": _interface_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["internal interface call", node]))
//                                                         },
//                                                         "state change": () => {
//                                                             return wrap(((callback: (out: t.__state_change_T) => void) => {
//                                                                 let _state_v: string | null = null
//                                                                 let _type_v: t.__type_state_change_TU | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "state": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(context.expectQuotedString({
//                                                                                 warningOnly: true,
//                                                                                 callback: ($) => {
//                                                                                     _state_v = $.token.token.value
//                                                                                 },
//                                                                             })),
//                                                                         },
//                                                                         "type": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(context.expectTaggedUnion({
//                                                                                 options: {
//                                                                                     "dictionary": () => {
//                                                                                         return wrap(((callback: (out: t.__dictionary_type_state_change_T) => void) => {
//                                                                                             let _strategy_v: t.__strategy_dictionary_TU | null = null
//                                                                                             return context.expectVerboseGroup({
//                                                                                                 properties: {
//                                                                                                     "strategy": {
//                                                                                                         onNotExists: () => { /**/ },
//                                                                                                         onExists: () => wrap(context.expectTaggedUnion({
//                                                                                                             options: {
//                                                                                                                 "add entry": () => {
//                                                                                                                     return wrap(((callback: (out: t.__add_entry_T) => void) => {
//                                                                                                                         let _expression_v: t.__type_expression_T | null = null
//                                                                                                                         let _key_v: t.__string_expression_T | null = null
//                                                                                                                         return context.expectVerboseGroup({
//                                                                                                                             properties: {
//                                                                                                                                 "expression": {
//                                                                                                                                     onNotExists: () => { /**/ },
//                                                                                                                                     onExists: () => wrap(_generateHandler_type_expression(
//                                                                                                                                         (node) => _expression_v = node
//                                                                                                                                     )),
//                                                                                                                                 },
//                                                                                                                                 "key": {
//                                                                                                                                     onNotExists: () => { /**/ },
//                                                                                                                                     onExists: () => wrap(_generateHandler_string_expression(
//                                                                                                                                         (node) => _key_v = node
//                                                                                                                                     )),
//                                                                                                                                 },
//                                                                                                                             },
//                                                                                                                             onEnd: () => {
//                                                                                                                                 if (_expression_v === null) {
//                                                                                                                                     _expression_v = {
//                                                                                                                                         "strategy": ["literal", {
//                                                                                                                                             "type": ["string", {
//                                                                                                                                                 "value": "",
//                                                                                                                                             }],
//                                                                                                                                         }],
//                                                                                                                                     }
//                                                                                                                                 }
//                                                                                                                                 if (_key_v === null) {
//                                                                                                                                     _key_v = {
//                                                                                                                                         "strategy": ["literal", {
//                                                                                                                                             "value": "",
//                                                                                                                                         }],
//                                                                                                                                     }
//                                                                                                                                 }
//                                                                                                                                 callback({
//                                                                                                                                     "expression": _expression_v,
//                                                                                                                                     "key": _key_v,
//                                                                                                                                 })
//                                                                                                                             },
//                                                                                                                         })
//                                                                                                                     })((node) => _strategy_v = ["add entry", node]))
//                                                                                                                 },
//                                                                                                             },
//                                                                                                         })),
//                                                                                                     },
//                                                                                                 },
//                                                                                                 onEnd: () => {
//                                                                                                     if (_strategy_v === null) {
//                                                                                                         _strategy_v = ["add entry", {
//                                                                                                             "expression": {
//                                                                                                                 "strategy": ["literal", {
//                                                                                                                     "type": ["string", {
//                                                                                                                         "value": "",
//                                                                                                                     }],
//                                                                                                                 }],
//                                                                                                             },
//                                                                                                             "key": {
//                                                                                                                 "strategy": ["literal", {
//                                                                                                                     "value": "",
//                                                                                                                 }],
//                                                                                                             },
//                                                                                                         }]
//                                                                                                     }
//                                                                                                     callback({
//                                                                                                         "strategy": _strategy_v,
//                                                                                                     })
//                                                                                                 },
//                                                                                             })
//                                                                                         })((node) => _type_v = ["dictionary", node]))
//                                                                                     },
//                                                                                     "list": () => {
//                                                                                         return wrap(((callback: (out: t.__list_type_T) => void) => {
//                                                                                             let _strategy_v: t.__strategy_list_TU | null = null
//                                                                                             return context.expectVerboseGroup({
//                                                                                                 properties: {
//                                                                                                     "strategy": {
//                                                                                                         onNotExists: () => { /**/ },
//                                                                                                         onExists: () => wrap(context.expectTaggedUnion({
//                                                                                                             options: {
//                                                                                                                 "add element": () => {
//                                                                                                                     return wrap(((callback: (out: t.__add_element_T) => void) => {
//                                                                                                                         let _expression_v: t.__type_expression_T | null = null
//                                                                                                                         return context.expectVerboseGroup({
//                                                                                                                             properties: {
//                                                                                                                                 "expression": {
//                                                                                                                                     onNotExists: () => { /**/ },
//                                                                                                                                     onExists: () => wrap(_generateHandler_type_expression(
//                                                                                                                                         (node) => _expression_v = node
//                                                                                                                                     )),
//                                                                                                                                 },
//                                                                                                                             },
//                                                                                                                             onEnd: () => {
//                                                                                                                                 if (_expression_v === null) {
//                                                                                                                                     _expression_v = {
//                                                                                                                                         "strategy": ["literal", {
//                                                                                                                                             "type": ["string", {
//                                                                                                                                                 "value": "",
//                                                                                                                                             }],
//                                                                                                                                         }],
//                                                                                                                                     }
//                                                                                                                                 }
//                                                                                                                                 callback({
//                                                                                                                                     "expression": _expression_v,
//                                                                                                                                 })
//                                                                                                                             },
//                                                                                                                         })
//                                                                                                                     })((node) => _strategy_v = ["add element", node]))
//                                                                                                                 },
//                                                                                                             },
//                                                                                                         })),
//                                                                                                     },
//                                                                                                 },
//                                                                                                 onEnd: () => {
//                                                                                                     if (_strategy_v === null) {
//                                                                                                         _strategy_v = ["add element", {
//                                                                                                             "expression": {
//                                                                                                                 "strategy": ["literal", {
//                                                                                                                     "type": ["string", {
//                                                                                                                         "value": "",
//                                                                                                                     }],
//                                                                                                                 }],
//                                                                                                             },
//                                                                                                         }]
//                                                                                                     }
//                                                                                                     callback({
//                                                                                                         "strategy": _strategy_v,
//                                                                                                     })
//                                                                                                 },
//                                                                                             })
//                                                                                         })((node) => _type_v = ["list", node]))
//                                                                                     },
//                                                                                     "string": () => {
//                                                                                         return wrap(((callback: (out: t.__string_T) => void) => {
//                                                                                             let _initializer_v: t.__string_expression_T | null = null
//                                                                                             return context.expectVerboseGroup({
//                                                                                                 properties: {
//                                                                                                     "initializer": {
//                                                                                                         onNotExists: () => { /**/ },
//                                                                                                         onExists: () => wrap(_generateHandler_string_expression(
//                                                                                                             (node) => _initializer_v = node
//                                                                                                         )),
//                                                                                                     },
//                                                                                                 },
//                                                                                                 onEnd: () => {
//                                                                                                     if (_initializer_v === null) {
//                                                                                                         _initializer_v = {
//                                                                                                             "strategy": ["literal", {
//                                                                                                                 "value": "",
//                                                                                                             }],
//                                                                                                         }
//                                                                                                     }
//                                                                                                     callback({
//                                                                                                         "initializer": _initializer_v,
//                                                                                                     })
//                                                                                                 },
//                                                                                             })
//                                                                                         })((node) => _type_v = ["string", node]))
//                                                                                     },
//                                                                                     "type4": () => {
//                                                                                         return wrap(((callback: (out: t.__type4_T) => void) => {
//                                                                                             let _expression_v: t.__type_expression_T | null = null
//                                                                                             return context.expectVerboseGroup({
//                                                                                                 properties: {
//                                                                                                     "expression": {
//                                                                                                         onNotExists: () => { /**/ },
//                                                                                                         onExists: () => wrap(_generateHandler_type_expression(
//                                                                                                             (node) => _expression_v = node
//                                                                                                         )),
//                                                                                                     },
//                                                                                                 },
//                                                                                                 onEnd: () => {
//                                                                                                     if (_expression_v === null) {
//                                                                                                         _expression_v = {
//                                                                                                             "strategy": ["literal", {
//                                                                                                                 "type": ["string", {
//                                                                                                                     "value": "",
//                                                                                                                 }],
//                                                                                                             }],
//                                                                                                         }
//                                                                                                     }
//                                                                                                     callback({
//                                                                                                         "expression": _expression_v,
//                                                                                                     })
//                                                                                                 },
//                                                                                             })
//                                                                                         })((node) => _type_v = ["type4", node]))
//                                                                                     },
//                                                                                 },
//                                                                             })),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_state_v === null) {
//                                                                             _state_v = "*state*"
//                                                                         }
//                                                                         if (_type_v === null) {
//                                                                             _type_v = ["string", {
//                                                                                 "initializer": {
//                                                                                     "strategy": ["literal", {
//                                                                                         "value": "",
//                                                                                     }],
//                                                                                 },
//                                                                             }]
//                                                                         }
//                                                                         callback({
//                                                                             "state": _state_v,
//                                                                             "type": _type_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["state change", node]))
//                                                         },
//                                                     },
//                                                 })),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_type_v === null) {
//                                                 _type_v = ["external interface call", {
//                                                     "expression": {
//                                                         "strategy": ["literal", {
//                                                             "type": ["string", {
//                                                                 "value": "",
//                                                             }],
//                                                         }],
//                                                     },
//                                                     "interface": "*interface*",
//                                                 }]
//                                             }
//                                             callback({
//                                                 "type": _type_v,
//                                             })
//                                         },
//                                     })
//                                 })((node) => _effects_v.push(node))
//                             },
//                         })),
//                     },
//                     "markers": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectDictionary({
//                             onProperty: (propertyData) => {
//                                 return wrap(((callback: (out: t.__markers_T) => void) => {
//                                     let _selection_v: t.__context_selection_T | null = null
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "selection": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(_generateHandler_context_selection(
//                                                     (node) => _selection_v = node
//                                                 )),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_selection_v === null) {
//                                                 _selection_v = {
//                                                     "start": {
//                                                         "start": ["context", {
//                                                         }],
//                                                     },
//                                                     "steps": pl.createArray([]),
//                                                 }
//                                             }
//                                             callback({
//                                                 "selection": _selection_v,
//                                             })
//                                         },
//                                     })
//                                 })((node) => _markers_v[propertyData.token.token.value] = node))
//                             },
//                         })),
//                     },
//                     "nested procedures": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectDictionary({
//                             onProperty: (propertyData) => {
//                                 return wrap(((callback: (out: t.__nested_procedures_T) => void) => {
//                                     let _specification_v: t.__internal_procedure_specification_T | null = null
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "specification": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(_generateHandler_internal_procedure_specification(
//                                                     (node) => _specification_v = node
//                                                 )),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_specification_v === null) {
//                                                 _specification_v = {
//                                                     "block": {
//                                                         "effects": pl.createArray([]),
//                                                         "markers": pl.createDictionary({}),
//                                                         "nested procedures": pl.createDictionary({}),
//                                                         "return value": ["void", {
//                                                         }],
//                                                         "states": pl.createDictionary({}),
//                                                     },
//                                                     "parameters": pl.createDictionary({}),
//                                                     "return type": ["void", {
//                                                     }],
//                                                 }
//                                             }
//                                             callback({
//                                                 "specification": _specification_v,
//                                             })
//                                         },
//                                     })
//                                 })((node) => _nested_procedures_v[propertyData.token.token.value] = node))
//                             },
//                         })),
//                     },
//                     "return value": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "interface": () => {
//                                     return wrap(((callback: (out: t.__interface_return_value_T) => void) => {
//                                         let _expression_v: t.__interface_expression_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "expression": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_interface_expression(
//                                                         (node) => _expression_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_expression_v === null) {
//                                                     _expression_v = {
//                                                         "type": ["initialize", {
//                                                             "type": ["method", {
//                                                                 "strategy": ["procedure implementation", {
//                                                                     "block": {
//                                                                         "effects": pl.createArray([]),
//                                                                         "markers": pl.createDictionary({}),
//                                                                         "nested procedures": pl.createDictionary({}),
//                                                                         "return value": ["void", {
//                                                                         }],
//                                                                         "states": pl.createDictionary({}),
//                                                                     },
//                                                                 }],
//                                                             }],
//                                                         }],
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "expression": _expression_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _return_value_v = ["interface", node]))
//                                 },
//                                 "void": () => {
//                                     return wrap(((callback: (out: t.__void_return_value_T) => void) => {
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _return_value_v = ["void", node]))
//                                 },
//                             },
//                         })),
//                     },
//                     "states": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectDictionary({
//                             onProperty: (propertyData) => {
//                                 return wrap(((callback: (out: t.__states_T) => void) => {
//                                     let _type_v: t.__type_states_TU | null = null
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "type": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectTaggedUnion({
//                                                     options: {
//                                                         "dictionary": () => {
//                                                             return wrap(((callback: (out: t.__dictionary_type_states_T) => void) => {
//                                                                 let _type_v: t.__nested_type_reference_T | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "type": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(_generateHandler_nested_type_reference(
//                                                                                 (node) => _type_v = node
//                                                                             )),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_type_v === null) {
//                                                                             _type_v = {
//                                                                                 "namespace reference": {
//                                                                                     "namespace": "*namespace*",
//                                                                                     "type arguments": pl.createDictionary({}),
//                                                                                 },
//                                                                                 "steps": pl.createArray([]),
//                                                                                 "type": "*type reference*",
//                                                                             }
//                                                                         }
//                                                                         callback({
//                                                                             "type": _type_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["dictionary", node]))
//                                                         },
//                                                         "list": () => {
//                                                             return wrap(((callback: (out: t.__list_type_states_T) => void) => {
//                                                                 let _type_v: t.__nested_type_reference_T | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "type": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(_generateHandler_nested_type_reference(
//                                                                                 (node) => _type_v = node
//                                                                             )),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_type_v === null) {
//                                                                             _type_v = {
//                                                                                 "namespace reference": {
//                                                                                     "namespace": "*namespace*",
//                                                                                     "type arguments": pl.createDictionary({}),
//                                                                                 },
//                                                                                 "steps": pl.createArray([]),
//                                                                                 "type": "*type reference*",
//                                                                             }
//                                                                         }
//                                                                         callback({
//                                                                             "type": _type_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["list", node]))
//                                                         },
//                                                         "string": () => {
//                                                             return wrap(((callback: (out: t.__string_type_T) => void) => {
//                                                                 let _initial_value_v: string | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "initial value": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(context.expectQuotedString({
//                                                                                 warningOnly: true,
//                                                                                 callback: ($) => {
//                                                                                     _initial_value_v = $.token.token.value
//                                                                                 },
//                                                                             })),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_initial_value_v === null) {
//                                                                             _initial_value_v = ""
//                                                                         }
//                                                                         callback({
//                                                                             "initial value": _initial_value_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["string", node]))
//                                                         },
//                                                         "type5": () => {
//                                                             return wrap(((callback: (out: t.__type5_T) => void) => {
//                                                                 let _expression_v: t.__type_expression_T | null = null
//                                                                 let _nested_type_v: t.__nested_type_reference_T | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "expression": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(_generateHandler_type_expression(
//                                                                                 (node) => _expression_v = node
//                                                                             )),
//                                                                         },
//                                                                         "nested type": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(_generateHandler_nested_type_reference(
//                                                                                 (node) => _nested_type_v = node
//                                                                             )),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_expression_v === null) {
//                                                                             _expression_v = {
//                                                                                 "strategy": ["literal", {
//                                                                                     "type": ["string", {
//                                                                                         "value": "",
//                                                                                     }],
//                                                                                 }],
//                                                                             }
//                                                                         }
//                                                                         if (_nested_type_v === null) {
//                                                                             _nested_type_v = {
//                                                                                 "namespace reference": {
//                                                                                     "namespace": "*namespace*",
//                                                                                     "type arguments": pl.createDictionary({}),
//                                                                                 },
//                                                                                 "steps": pl.createArray([]),
//                                                                                 "type": "*type reference*",
//                                                                             }
//                                                                         }
//                                                                         callback({
//                                                                             "expression": _expression_v,
//                                                                             "nested type": _nested_type_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _type_v = ["type5", node]))
//                                                         },
//                                                     },
//                                                 })),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_type_v === null) {
//                                                 _type_v = ["string", {
//                                                     "initial value": "",
//                                                 }]
//                                             }
//                                             callback({
//                                                 "type": _type_v,
//                                             })
//                                         },
//                                     })
//                                 })((node) => _states_v[propertyData.token.token.value] = node))
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_return_value_v === null) {
//                         _return_value_v = ["void", {
//                         }]
//                     }
//                     callback({
//                         "effects": _effects_v.toArray(),
//                         "markers": pl.createDictionary(_markers_v),
//                         "nested procedures": pl.createDictionary(_nested_procedures_v),
//                         "return value": _return_value_v,
//                         "states": pl.createDictionary(_states_v),
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_procedure_call(
//         callback: (out: t.__procedure_call_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__procedure_call_T) => void) => {
//             const _interface_arguments_v: { [key: string]: t.__interface_arguments_T } = {}
//             return context.expectVerboseGroup({
//                 properties: {
//                     "interface arguments": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectDictionary({
//                             onProperty: (propertyData) => {
//                                 return wrap(((callback: (out: t.__interface_arguments_T) => void) => {
//                                     let _expression_v: t.__interface_expression_T | null = null
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "expression": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(_generateHandler_interface_expression(
//                                                     (node) => _expression_v = node
//                                                 )),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_expression_v === null) {
//                                                 _expression_v = {
//                                                     "type": ["initialize", {
//                                                         "type": ["method", {
//                                                             "strategy": ["procedure implementation", {
//                                                                 "block": {
//                                                                     "effects": pl.createArray([]),
//                                                                     "markers": pl.createDictionary({}),
//                                                                     "nested procedures": pl.createDictionary({}),
//                                                                     "return value": ["void", {
//                                                                     }],
//                                                                     "states": pl.createDictionary({}),
//                                                                 },
//                                                             }],
//                                                         }],
//                                                     }],
//                                                 }
//                                             }
//                                             callback({
//                                                 "expression": _expression_v,
//                                             })
//                                         },
//                                     })
//                                 })((node) => _interface_arguments_v[propertyData.token.token.value] = node))
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     callback({
//                         "interface arguments": pl.createDictionary(_interface_arguments_v),
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_root(
//         callback: (out: t.__root_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__root_T) => void) => {
//             const _function_implementations_v: { [key: string]: t.__function_implementations_T } = {}
//             const _namespaces_v: { [key: string]: t.__namespaces_T } = {}
//             const _procedure_implementations_v: { [key: string]: t.__procedure_implementations_T } = {}
//             return context.expectVerboseGroup({
//                 properties: {
//                     "function implementations": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectDictionary({
//                             onProperty: (propertyData) => {
//                                 return wrap(((callback: (out: t.__function_implementations_T) => void) => {
//                                     let _block_v: t.__type_expression_block_T | null = null
//                                     let _declaration_v: string | null = null
//                                     let _namespace_reference_v: t.__namespace_reference_T | null = null
//                                     const _type_parameters_v: { [key: string]: t.__type_parameters_T } = {}
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "block": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(_generateHandler_type_expression_block(
//                                                     (node) => _block_v = node
//                                                 )),
//                                             },
//                                             "declaration": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectQuotedString({
//                                                     warningOnly: true,
//                                                     callback: ($) => {
//                                                         _declaration_v = $.token.token.value
//                                                     },
//                                                 })),
//                                             },
//                                             "namespace reference": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(_generateHandler_namespace_reference(
//                                                     (node) => _namespace_reference_v = node
//                                                 )),
//                                             },
//                                             "type parameters": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectDictionary({
//                                                     onProperty: (propertyData) => {
//                                                         return wrap(((callback: (out: t.__type_parameters_T) => void) => {
//                                                             return context.expectVerboseGroup({
//                                                                 properties: {
//                                                                 },
//                                                                 onEnd: () => {
//                                                                     callback({
//                                                                     })
//                                                                 },
//                                                             })
//                                                         })((node) => _type_parameters_v[propertyData.token.token.value] = node))
//                                                     },
//                                                 })),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_block_v === null) {
//                                                 _block_v = {
//                                                     "expression": {
//                                                         "strategy": ["literal", {
//                                                             "type": ["string", {
//                                                                 "value": "",
//                                                             }],
//                                                         }],
//                                                     },
//                                                     "functions": pl.createDictionary({}),
//                                                 }
//                                             }
//                                             if (_declaration_v === null) {
//                                                 _declaration_v = "*function declaration*"
//                                             }
//                                             if (_namespace_reference_v === null) {
//                                                 _namespace_reference_v = {
//                                                     "namespace": "*namespace*",
//                                                     "type arguments": pl.createDictionary({}),
//                                                 }
//                                             }
//                                             callback({
//                                                 "block": _block_v,
//                                                 "declaration": _declaration_v,
//                                                 "namespace reference": _namespace_reference_v,
//                                                 "type parameters": pl.createDictionary(_type_parameters_v),
//                                             })
//                                         },
//                                     })
//                                 })((node) => _function_implementations_v[propertyData.token.token.value] = node))
//                             },
//                         })),
//                     },
//                     "namespaces": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectDictionary({
//                             onProperty: (propertyData) => {
//                                 return wrap(((callback: (out: t.__namespaces_T) => void) => {
//                                     const _function_declarations_v: { [key: string]: t.__function_declarations_T } = {}
//                                     const _interface_builders_v: { [key: string]: t.__interface_builders_T } = {}
//                                     const _interfaces_v: { [key: string]: t.__interfaces_namespaces_T } = {}
//                                     const _procedure_declarations_v: { [key: string]: t.__procedure_declarations_T } = {}
//                                     const _type_parameters_v: { [key: string]: t.__type_parameters_namespaces_T } = {}
//                                     const _types_v: { [key: string]: t.__types_T } = {}
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "function declarations": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectDictionary({
//                                                     onProperty: (propertyData) => {
//                                                         return wrap(((callback: (out: t.__function_declarations_T) => void) => {
//                                                             let _declaration_v: t.__function_declaration_T | null = null
//                                                             return context.expectVerboseGroup({
//                                                                 properties: {
//                                                                     "declaration": {
//                                                                         onNotExists: () => { /**/ },
//                                                                         onExists: () => wrap(_generateHandler_function_declaration(
//                                                                             (node) => _declaration_v = node
//                                                                         )),
//                                                                     },
//                                                                 },
//                                                                 onEnd: () => {
//                                                                     if (_declaration_v === null) {
//                                                                         _declaration_v = {
//                                                                             "in": {
//                                                                                 "namespace selection": {
//                                                                                     "which": ["current", {
//                                                                                     }],
//                                                                                 },
//                                                                                 "type": "*type reference*",
//                                                                             },
//                                                                             "out": {
//                                                                                 "namespace selection": {
//                                                                                     "which": ["current", {
//                                                                                     }],
//                                                                                 },
//                                                                                 "type": "*type reference*",
//                                                                             },
//                                                                         }
//                                                                     }
//                                                                     callback({
//                                                                         "declaration": _declaration_v,
//                                                                     })
//                                                                 },
//                                                             })
//                                                         })((node) => _function_declarations_v[propertyData.token.token.value] = node))
//                                                     },
//                                                 })),
//                                             },
//                                             "interface builders": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectDictionary({
//                                                     onProperty: (propertyData) => {
//                                                         return wrap(((callback: (out: t.__interface_builders_T) => void) => {
//                                                             const _methods_v: { [key: string]: t.__methods_T } = {}
//                                                             return context.expectVerboseGroup({
//                                                                 properties: {
//                                                                     "methods": {
//                                                                         onNotExists: () => { /**/ },
//                                                                         onExists: () => wrap(context.expectDictionary({
//                                                                             onProperty: (propertyData) => {
//                                                                                 return wrap(((callback: (out: t.__methods_T) => void) => {
//                                                                                     let _declaration_v: t.__builder_procedure_declaration_T | null = null
//                                                                                     return context.expectVerboseGroup({
//                                                                                         properties: {
//                                                                                             "declaration": {
//                                                                                                 onNotExists: () => { /**/ },
//                                                                                                 onExists: () => wrap(_generateHandler_builder_procedure_declaration(
//                                                                                                     (node) => _declaration_v = node
//                                                                                                 )),
//                                                                                             },
//                                                                                         },
//                                                                                         onEnd: () => {
//                                                                                             if (_declaration_v === null) {
//                                                                                                 _declaration_v = {
//                                                                                                     "interfaces": pl.createDictionary({}),
//                                                                                                     "return type": ["void", {
//                                                                                                     }],
//                                                                                                 }
//                                                                                             }
//                                                                                             callback({
//                                                                                                 "declaration": _declaration_v,
//                                                                                             })
//                                                                                         },
//                                                                                     })
//                                                                                 })((node) => _methods_v[propertyData.token.token.value] = node))
//                                                                             },
//                                                                         })),
//                                                                     },
//                                                                 },
//                                                                 onEnd: () => {
//                                                                     callback({
//                                                                         "methods": pl.createDictionary(_methods_v),
//                                                                     })
//                                                                 },
//                                                             })
//                                                         })((node) => _interface_builders_v[propertyData.token.token.value] = node))
//                                                     },
//                                                 })),
//                                             },
//                                             "interfaces": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectDictionary({
//                                                     onProperty: (propertyData) => {
//                                                         return wrap(((callback: (out: t.__interfaces_namespaces_T) => void) => {
//                                                             let _definition_v: t.__interface_definition_T | null = null
//                                                             return context.expectVerboseGroup({
//                                                                 properties: {
//                                                                     "definition": {
//                                                                         onNotExists: () => { /**/ },
//                                                                         onExists: () => wrap(_generateHandler_interface_definition(
//                                                                             (node) => _definition_v = node
//                                                                         )),
//                                                                     },
//                                                                 },
//                                                                 onEnd: () => {
//                                                                     if (_definition_v === null) {
//                                                                         _definition_v = {
//                                                                             "type": ["group", {
//                                                                                 "members": pl.createDictionary({}),
//                                                                             }],
//                                                                         }
//                                                                     }
//                                                                     callback({
//                                                                         "definition": _definition_v,
//                                                                     })
//                                                                 },
//                                                             })
//                                                         })((node) => _interfaces_v[propertyData.token.token.value] = node))
//                                                     },
//                                                 })),
//                                             },
//                                             "procedure declarations": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectDictionary({
//                                                     onProperty: (propertyData) => {
//                                                         return wrap(((callback: (out: t.__procedure_declarations_T) => void) => {
//                                                             const _builders_v: { [key: string]: t.__builders_T } = {}
//                                                             let _context_v: t.__type_reference_T | null = null
//                                                             const _functions_v: { [key: string]: t.__functions_T } = {}
//                                                             const _interfaces_v: { [key: string]: t.__interfaces_procedure_declarations_T } = {}
//                                                             let _return_type_v: t.__return_type_procedure_declarations_TU | null = null
//                                                             return context.expectVerboseGroup({
//                                                                 properties: {
//                                                                     "builders": {
//                                                                         onNotExists: () => { /**/ },
//                                                                         onExists: () => wrap(context.expectDictionary({
//                                                                             onProperty: (propertyData) => {
//                                                                                 return wrap(((callback: (out: t.__builders_T) => void) => {
//                                                                                     let _builder_v: string | null = null
//                                                                                     let _namespace_selection_v: t.__namespace_selection_T | null = null
//                                                                                     return context.expectVerboseGroup({
//                                                                                         properties: {
//                                                                                             "builder": {
//                                                                                                 onNotExists: () => { /**/ },
//                                                                                                 onExists: () => wrap(context.expectQuotedString({
//                                                                                                     warningOnly: true,
//                                                                                                     callback: ($) => {
//                                                                                                         _builder_v = $.token.token.value
//                                                                                                     },
//                                                                                                 })),
//                                                                                             },
//                                                                                             "namespace selection": {
//                                                                                                 onNotExists: () => { /**/ },
//                                                                                                 onExists: () => wrap(_generateHandler_namespace_selection(
//                                                                                                     (node) => _namespace_selection_v = node
//                                                                                                 )),
//                                                                                             },
//                                                                                         },
//                                                                                         onEnd: () => {
//                                                                                             if (_builder_v === null) {
//                                                                                                 _builder_v = "*referenced builder*"
//                                                                                             }
//                                                                                             if (_namespace_selection_v === null) {
//                                                                                                 _namespace_selection_v = {
//                                                                                                     "which": ["current", {
//                                                                                                     }],
//                                                                                                 }
//                                                                                             }
//                                                                                             callback({
//                                                                                                 "builder": _builder_v,
//                                                                                                 "namespace selection": _namespace_selection_v,
//                                                                                             })
//                                                                                         },
//                                                                                     })
//                                                                                 })((node) => _builders_v[propertyData.token.token.value] = node))
//                                                                             },
//                                                                         })),
//                                                                     },
//                                                                     "context": {
//                                                                         onNotExists: () => { /**/ },
//                                                                         onExists: () => wrap(_generateHandler_type_reference(
//                                                                             (node) => _context_v = node
//                                                                         )),
//                                                                     },
//                                                                     "functions": {
//                                                                         onNotExists: () => { /**/ },
//                                                                         onExists: () => wrap(context.expectDictionary({
//                                                                             onProperty: (propertyData) => {
//                                                                                 return wrap(((callback: (out: t.__functions_T) => void) => {
//                                                                                     let _declaration_v: t.__function_declaration_T | null = null
//                                                                                     return context.expectVerboseGroup({
//                                                                                         properties: {
//                                                                                             "declaration": {
//                                                                                                 onNotExists: () => { /**/ },
//                                                                                                 onExists: () => wrap(_generateHandler_function_declaration(
//                                                                                                     (node) => _declaration_v = node
//                                                                                                 )),
//                                                                                             },
//                                                                                         },
//                                                                                         onEnd: () => {
//                                                                                             if (_declaration_v === null) {
//                                                                                                 _declaration_v = {
//                                                                                                     "in": {
//                                                                                                         "namespace selection": {
//                                                                                                             "which": ["current", {
//                                                                                                             }],
//                                                                                                         },
//                                                                                                         "type": "*type reference*",
//                                                                                                     },
//                                                                                                     "out": {
//                                                                                                         "namespace selection": {
//                                                                                                             "which": ["current", {
//                                                                                                             }],
//                                                                                                         },
//                                                                                                         "type": "*type reference*",
//                                                                                                     },
//                                                                                                 }
//                                                                                             }
//                                                                                             callback({
//                                                                                                 "declaration": _declaration_v,
//                                                                                             })
//                                                                                         },
//                                                                                     })
//                                                                                 })((node) => _functions_v[propertyData.token.token.value] = node))
//                                                                             },
//                                                                         })),
//                                                                     },
//                                                                     "interfaces": {
//                                                                         onNotExists: () => { /**/ },
//                                                                         onExists: () => wrap(context.expectDictionary({
//                                                                             onProperty: (propertyData) => {
//                                                                                 return wrap(((callback: (out: t.__interfaces_procedure_declarations_T) => void) => {
//                                                                                     let _interface_v: t.__interface_definition_T | null = null
//                                                                                     return context.expectVerboseGroup({
//                                                                                         properties: {
//                                                                                             "interface": {
//                                                                                                 onNotExists: () => { /**/ },
//                                                                                                 onExists: () => wrap(_generateHandler_interface_definition(
//                                                                                                     (node) => _interface_v = node
//                                                                                                 )),
//                                                                                             },
//                                                                                         },
//                                                                                         onEnd: () => {
//                                                                                             if (_interface_v === null) {
//                                                                                                 _interface_v = {
//                                                                                                     "type": ["group", {
//                                                                                                         "members": pl.createDictionary({}),
//                                                                                                     }],
//                                                                                                 }
//                                                                                             }
//                                                                                             callback({
//                                                                                                 "interface": _interface_v,
//                                                                                             })
//                                                                                         },
//                                                                                     })
//                                                                                 })((node) => _interfaces_v[propertyData.token.token.value] = node))
//                                                                             },
//                                                                         })),
//                                                                     },
//                                                                     "return type": {
//                                                                         onNotExists: () => { /**/ },
//                                                                         onExists: () => wrap(context.expectTaggedUnion({
//                                                                             options: {
//                                                                                 "interface": () => {
//                                                                                     return wrap(((callback: (out: t.__interface_return_type_procedure_declarations_T) => void) => {
//                                                                                         let _interface_v: t.__interface_definition_T | null = null
//                                                                                         return context.expectVerboseGroup({
//                                                                                             properties: {
//                                                                                                 "interface": {
//                                                                                                     onNotExists: () => { /**/ },
//                                                                                                     onExists: () => wrap(_generateHandler_interface_definition(
//                                                                                                         (node) => _interface_v = node
//                                                                                                     )),
//                                                                                                 },
//                                                                                             },
//                                                                                             onEnd: () => {
//                                                                                                 if (_interface_v === null) {
//                                                                                                     _interface_v = {
//                                                                                                         "type": ["group", {
//                                                                                                             "members": pl.createDictionary({}),
//                                                                                                         }],
//                                                                                                     }
//                                                                                                 }
//                                                                                                 callback({
//                                                                                                     "interface": _interface_v,
//                                                                                                 })
//                                                                                             },
//                                                                                         })
//                                                                                     })((node) => _return_type_v = ["interface", node]))
//                                                                                 },
//                                                                                 "void": () => {
//                                                                                     return wrap(((callback: (out: t.__void_return_type_procedure_declarations_T) => void) => {
//                                                                                         return context.expectVerboseGroup({
//                                                                                             properties: {
//                                                                                             },
//                                                                                             onEnd: () => {
//                                                                                                 callback({
//                                                                                                 })
//                                                                                             },
//                                                                                         })
//                                                                                     })((node) => _return_type_v = ["void", node]))
//                                                                                 },
//                                                                             },
//                                                                         })),
//                                                                     },
//                                                                 },
//                                                                 onEnd: () => {
//                                                                     if (_context_v === null) {
//                                                                         _context_v = {
//                                                                             "namespace selection": {
//                                                                                 "which": ["current", {
//                                                                                 }],
//                                                                             },
//                                                                             "type": "*type reference*",
//                                                                         }
//                                                                     }
//                                                                     if (_return_type_v === null) {
//                                                                         _return_type_v = ["void", {
//                                                                         }]
//                                                                     }
//                                                                     callback({
//                                                                         "builders": pl.createDictionary(_builders_v),
//                                                                         "context": _context_v,
//                                                                         "functions": pl.createDictionary(_functions_v),
//                                                                         "interfaces": pl.createDictionary(_interfaces_v),
//                                                                         "return type": _return_type_v,
//                                                                     })
//                                                                 },
//                                                             })
//                                                         })((node) => _procedure_declarations_v[propertyData.token.token.value] = node))
//                                                     },
//                                                 })),
//                                             },
//                                             "type parameters": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectDictionary({
//                                                     onProperty: (propertyData) => {
//                                                         return wrap(((callback: (out: t.__type_parameters_namespaces_T) => void) => {
//                                                             return context.expectVerboseGroup({
//                                                                 properties: {
//                                                                 },
//                                                                 onEnd: () => {
//                                                                     callback({
//                                                                     })
//                                                                 },
//                                                             })
//                                                         })((node) => _type_parameters_v[propertyData.token.token.value] = node))
//                                                     },
//                                                 })),
//                                             },
//                                             "types": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectDictionary({
//                                                     onProperty: (propertyData) => {
//                                                         return wrap(((callback: (out: t.__types_T) => void) => {
//                                                             let _type_v: t.__type_T | null = null
//                                                             return context.expectVerboseGroup({
//                                                                 properties: {
//                                                                     "type": {
//                                                                         onNotExists: () => { /**/ },
//                                                                         onExists: () => wrap(_generateHandler_type(
//                                                                             (node) => _type_v = node
//                                                                         )),
//                                                                     },
//                                                                 },
//                                                                 onEnd: () => {
//                                                                     if (_type_v === null) {
//                                                                         _type_v = {
//                                                                             "occurence": ["required", {
//                                                                             }],
//                                                                             "type": ["string", {
//                                                                             }],
//                                                                         }
//                                                                     }
//                                                                     callback({
//                                                                         "type": _type_v,
//                                                                     })
//                                                                 },
//                                                             })
//                                                         })((node) => _types_v[propertyData.token.token.value] = node))
//                                                     },
//                                                 })),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             callback({
//                                                 "function declarations": pl.createDictionary(_function_declarations_v),
//                                                 "interface builders": pl.createDictionary(_interface_builders_v),
//                                                 "interfaces": pl.createDictionary(_interfaces_v),
//                                                 "procedure declarations": pl.createDictionary(_procedure_declarations_v),
//                                                 "type parameters": pl.createDictionary(_type_parameters_v),
//                                                 "types": pl.createDictionary(_types_v),
//                                             })
//                                         },
//                                     })
//                                 })((node) => _namespaces_v[propertyData.token.token.value] = node))
//                             },
//                         })),
//                     },
//                     "procedure implementations": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectDictionary({
//                             onProperty: (propertyData) => {
//                                 return wrap(((callback: (out: t.__procedure_implementations_T) => void) => {
//                                     let _block_v: t.__procedure_block_T | null = null
//                                     let _declaration_v: string | null = null
//                                     let _namespace_reference_v: t.__namespace_reference_T | null = null
//                                     const _type_parameters_v: { [key: string]: t.__type_parameters_procedure_implementations_T } = {}
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "block": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(_generateHandler_procedure_block(
//                                                     (node) => _block_v = node
//                                                 )),
//                                             },
//                                             "declaration": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectQuotedString({
//                                                     warningOnly: true,
//                                                     callback: ($) => {
//                                                         _declaration_v = $.token.token.value
//                                                     },
//                                                 })),
//                                             },
//                                             "namespace reference": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(_generateHandler_namespace_reference(
//                                                     (node) => _namespace_reference_v = node
//                                                 )),
//                                             },
//                                             "type parameters": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(context.expectDictionary({
//                                                     onProperty: (propertyData) => {
//                                                         return wrap(((callback: (out: t.__type_parameters_procedure_implementations_T) => void) => {
//                                                             return context.expectVerboseGroup({
//                                                                 properties: {
//                                                                 },
//                                                                 onEnd: () => {
//                                                                     callback({
//                                                                     })
//                                                                 },
//                                                             })
//                                                         })((node) => _type_parameters_v[propertyData.token.token.value] = node))
//                                                     },
//                                                 })),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_block_v === null) {
//                                                 _block_v = {
//                                                     "effects": pl.createArray([]),
//                                                     "markers": pl.createDictionary({}),
//                                                     "nested procedures": pl.createDictionary({}),
//                                                     "return value": ["void", {
//                                                     }],
//                                                     "states": pl.createDictionary({}),
//                                                 }
//                                             }
//                                             if (_declaration_v === null) {
//                                                 _declaration_v = "*procedure declaration*"
//                                             }
//                                             if (_namespace_reference_v === null) {
//                                                 _namespace_reference_v = {
//                                                     "namespace": "*namespace*",
//                                                     "type arguments": pl.createDictionary({}),
//                                                 }
//                                             }
//                                             callback({
//                                                 "block": _block_v,
//                                                 "declaration": _declaration_v,
//                                                 "namespace reference": _namespace_reference_v,
//                                                 "type parameters": pl.createDictionary(_type_parameters_v),
//                                             })
//                                         },
//                                     })
//                                 })((node) => _procedure_implementations_v[propertyData.token.token.value] = node))
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     callback({
//                         "function implementations": pl.createDictionary(_function_implementations_v),
//                         "namespaces": pl.createDictionary(_namespaces_v),
//                         "procedure implementations": pl.createDictionary(_procedure_implementations_v),
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_string_expression(
//         callback: (out: t.__string_expression_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__string_expression_T) => void) => {
//             let _strategy_v: t.__strategy_string_expression_TU | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "strategy": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "literal": () => {
//                                     return wrap(((callback: (out: t.__literal_T) => void) => {
//                                         let _value_v: string | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "value": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectQuotedString({
//                                                         warningOnly: true,
//                                                         callback: ($) => {
//                                                             _value_v = $.token.token.value
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_value_v === null) {
//                                                     _value_v = ""
//                                                 }
//                                                 callback({
//                                                     "value": _value_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _strategy_v = ["literal", node]))
//                                 },
//                                 "select": () => {
//                                     return wrap(((callback: (out: t.__select_T) => void) => {
//                                         let _context_v: t.__context_selection_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "context": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_context_selection(
//                                                         (node) => _context_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_context_v === null) {
//                                                     _context_v = {
//                                                         "start": {
//                                                             "start": ["context", {
//                                                             }],
//                                                         },
//                                                         "steps": pl.createArray([]),
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "context": _context_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _strategy_v = ["select", node]))
//                                 },
//                                 "state": () => {
//                                     return wrap(((callback: (out: t.__state_strategy_T) => void) => {
//                                         let _state_v: string | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "state": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectQuotedString({
//                                                         warningOnly: true,
//                                                         callback: ($) => {
//                                                             _state_v = $.token.token.value
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_state_v === null) {
//                                                     _state_v = "*state*"
//                                                 }
//                                                 callback({
//                                                     "state": _state_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _strategy_v = ["state", node]))
//                                 },
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_strategy_v === null) {
//                         _strategy_v = ["literal", {
//                             "value": "",
//                         }]
//                     }
//                     callback({
//                         "strategy": _strategy_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_type(
//         callback: (out: t.__type_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__type_T) => void) => {
//             let _occurence_v: t.__occurence_TU | null = null
//             let _type_v: t.__type_type_TU | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "occurence": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "optional": () => {
//                                     return wrap(((callback: (out: t.__optional_T) => void) => {
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _occurence_v = ["optional", node]))
//                                 },
//                                 "required": () => {
//                                     return wrap(((callback: (out: t.__required_T) => void) => {
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _occurence_v = ["required", node]))
//                                 },
//                             },
//                         })),
//                     },
//                     "type": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "boolean": () => {
//                                     return wrap(((callback: (out: t.__boolean_T) => void) => {
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["boolean", node]))
//                                 },
//                                 "dictionary": () => {
//                                     return wrap(((callback: (out: t.__dictionary_type_type_T) => void) => {
//                                         let _entry_v: t.__type_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "entry": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_type(
//                                                         (node) => _entry_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_entry_v === null) {
//                                                     _entry_v = {
//                                                         "occurence": ["required", {
//                                                         }],
//                                                         "type": ["string", {
//                                                         }],
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "entry": _entry_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["dictionary", node]))
//                                 },
//                                 "group": () => {
//                                     return wrap(((callback: (out: t.__group_type_type_T) => void) => {
//                                         const _properties_v: { [key: string]: t.__properties_T } = {}
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "properties": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectDictionary({
//                                                         onProperty: (propertyData) => {
//                                                             return wrap(((callback: (out: t.__properties_T) => void) => {
//                                                                 let _type_v: t.__type_T | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "type": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(_generateHandler_type(
//                                                                                 (node) => _type_v = node
//                                                                             )),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_type_v === null) {
//                                                                             _type_v = {
//                                                                                 "occurence": ["required", {
//                                                                                 }],
//                                                                                 "type": ["string", {
//                                                                                 }],
//                                                                             }
//                                                                         }
//                                                                         callback({
//                                                                             "type": _type_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _properties_v[propertyData.token.token.value] = node))
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                     "properties": pl.createDictionary(_properties_v),
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["group", node]))
//                                 },
//                                 "list": () => {
//                                     return wrap(((callback: (out: t.__list_type_type_T) => void) => {
//                                         let _element_v: t.__type_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "element": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_type(
//                                                         (node) => _element_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_element_v === null) {
//                                                     _element_v = {
//                                                         "occurence": ["required", {
//                                                         }],
//                                                         "type": ["string", {
//                                                         }],
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "element": _element_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["list", node]))
//                                 },
//                                 "number": () => {
//                                     return wrap(((callback: (out: t.__number_T) => void) => {
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["number", node]))
//                                 },
//                                 "string": () => {
//                                     return wrap(((callback: (out: t.__string_type_type_T) => void) => {
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["string", node]))
//                                 },
//                                 "tagged union": () => {
//                                     return wrap(((callback: (out: t.__tagged_union_T) => void) => {
//                                         const _options_v: { [key: string]: t.__options_T } = {}
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "options": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectDictionary({
//                                                         onProperty: (propertyData) => {
//                                                             return wrap(((callback: (out: t.__options_T) => void) => {
//                                                                 let _type_v: t.__type_T | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "type": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(_generateHandler_type(
//                                                                                 (node) => _type_v = node
//                                                                             )),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_type_v === null) {
//                                                                             _type_v = {
//                                                                                 "occurence": ["required", {
//                                                                                 }],
//                                                                                 "type": ["string", {
//                                                                                 }],
//                                                                             }
//                                                                         }
//                                                                         callback({
//                                                                             "type": _type_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _options_v[propertyData.token.token.value] = node))
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 callback({
//                                                     "options": pl.createDictionary(_options_v),
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["tagged union", node]))
//                                 },
//                                 "type argument": () => {
//                                     return wrap(((callback: (out: t.__type_argument_T) => void) => {
//                                         let _argument_v: string | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "argument": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectQuotedString({
//                                                         warningOnly: true,
//                                                         callback: ($) => {
//                                                             _argument_v = $.token.token.value
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_argument_v === null) {
//                                                     _argument_v = "*type argument*"
//                                                 }
//                                                 callback({
//                                                     "argument": _argument_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["type argument", node]))
//                                 },
//                                 "type reference": () => {
//                                     return wrap(((callback: (out: t.__type_reference_type_T) => void) => {
//                                         let _type_v: t.__type_reference_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "type": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_type_reference(
//                                                         (node) => _type_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_type_v === null) {
//                                                     _type_v = {
//                                                         "namespace selection": {
//                                                             "which": ["current", {
//                                                             }],
//                                                         },
//                                                         "type": "*type reference*",
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "type": _type_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _type_v = ["type reference", node]))
//                                 },
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_occurence_v === null) {
//                         _occurence_v = ["required", {
//                         }]
//                     }
//                     if (_type_v === null) {
//                         _type_v = ["string", {
//                         }]
//                     }
//                     callback({
//                         "occurence": _occurence_v,
//                         "type": _type_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_type_expression(
//         callback: (out: t.__type_expression_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__type_expression_T) => void) => {
//             let _strategy_v: t.__strategy_type_expression_TU | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "strategy": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectTaggedUnion({
//                             options: {
//                                 "copy": () => {
//                                     return wrap(((callback: (out: t.__copy_T) => void) => {
//                                         let _context_v: t.__guaranteed_context_selection_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "context": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_guaranteed_context_selection(
//                                                         (node) => _context_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_context_v === null) {
//                                                     _context_v = {
//                                                         "missing handler": {
//                                                             "guaranteed": ["yes", {
//                                                             }],
//                                                         },
//                                                         "start": {
//                                                             "start": ["context", {
//                                                             }],
//                                                         },
//                                                         "steps": pl.createArray([]),
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "context": _context_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _strategy_v = ["copy", node]))
//                                 },
//                                 "dictionary from state": () => {
//                                     return wrap(((callback: (out: t.__dictionary_from_state_T) => void) => {
//                                         let _state_v: string | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "state": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectQuotedString({
//                                                         warningOnly: true,
//                                                         callback: ($) => {
//                                                             _state_v = $.token.token.value
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_state_v === null) {
//                                                     _state_v = "*state*"
//                                                 }
//                                                 callback({
//                                                     "state": _state_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _strategy_v = ["dictionary from state", node]))
//                                 },
//                                 "literal": () => {
//                                     return wrap(((callback: (out: t.__literal_strategy_T) => void) => {
//                                         let _type_v: t.__type_literal_TU | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "type": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectTaggedUnion({
//                                                         options: {
//                                                             "boolean": () => {
//                                                                 return wrap(((callback: (out: t.__boolean_type_T) => void) => {
//                                                                     let _value_v: string | null = null
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "value": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(context.expectQuotedString({
//                                                                                     warningOnly: true,
//                                                                                     callback: ($) => {
//                                                                                         _value_v = $.token.token.value
//                                                                                     },
//                                                                                 })),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             if (_value_v === null) {
//                                                                                 _value_v = "true"
//                                                                             }
//                                                                             callback({
//                                                                                 "value": _value_v,
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["boolean", node]))
//                                                             },
//                                                             "dictionary": () => {
//                                                                 return wrap(((callback: (out: t.__dictionary_type_literal_T) => void) => {
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             callback({
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["dictionary", node]))
//                                                             },
//                                                             "group": () => {
//                                                                 return wrap(((callback: (out: t.__group_type_literal_T) => void) => {
//                                                                     const _properties_v: { [key: string]: t.__properties_group_T } = {}
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "properties": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(context.expectDictionary({
//                                                                                     onProperty: (propertyData) => {
//                                                                                         return wrap(((callback: (out: t.__properties_group_T) => void) => {
//                                                                                             let _expression_v: t.__type_expression_T | null = null
//                                                                                             return context.expectVerboseGroup({
//                                                                                                 properties: {
//                                                                                                     "expression": {
//                                                                                                         onNotExists: () => { /**/ },
//                                                                                                         onExists: () => wrap(_generateHandler_type_expression(
//                                                                                                             (node) => _expression_v = node
//                                                                                                         )),
//                                                                                                     },
//                                                                                                 },
//                                                                                                 onEnd: () => {
//                                                                                                     if (_expression_v === null) {
//                                                                                                         _expression_v = {
//                                                                                                             "strategy": ["literal", {
//                                                                                                                 "type": ["string", {
//                                                                                                                     "value": "",
//                                                                                                                 }],
//                                                                                                             }],
//                                                                                                         }
//                                                                                                     }
//                                                                                                     callback({
//                                                                                                         "expression": _expression_v,
//                                                                                                     })
//                                                                                                 },
//                                                                                             })
//                                                                                         })((node) => _properties_v[propertyData.token.token.value] = node))
//                                                                                     },
//                                                                                 })),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             callback({
//                                                                                 "properties": pl.createDictionary(_properties_v),
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["group", node]))
//                                                             },
//                                                             "list": () => {
//                                                                 return wrap(((callback: (out: t.__list_type_literal_T) => void) => {
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             callback({
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["list", node]))
//                                                             },
//                                                             "number": () => {
//                                                                 return wrap(((callback: (out: t.__number_type_T) => void) => {
//                                                                     let _value_v: string | null = null
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "value": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(context.expectQuotedString({
//                                                                                     warningOnly: true,
//                                                                                     callback: ($) => {
//                                                                                         _value_v = $.token.token.value
//                                                                                     },
//                                                                                 })),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             if (_value_v === null) {
//                                                                                 _value_v = "0"
//                                                                             }
//                                                                             callback({
//                                                                                 "value": _value_v,
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["number", node]))
//                                                             },
//                                                             "string": () => {
//                                                                 return wrap(((callback: (out: t.__string_type_literal_T) => void) => {
//                                                                     let _value_v: string | null = null
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "value": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(context.expectQuotedString({
//                                                                                     warningOnly: true,
//                                                                                     callback: ($) => {
//                                                                                         _value_v = $.token.token.value
//                                                                                     },
//                                                                                 })),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             if (_value_v === null) {
//                                                                                 _value_v = ""
//                                                                             }
//                                                                             callback({
//                                                                                 "value": _value_v,
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["string", node]))
//                                                             },
//                                                             "tagged union": () => {
//                                                                 return wrap(((callback: (out: t.__tagged_union_type_T) => void) => {
//                                                                     let _data_v: t.__type_expression_T | null = null
//                                                                     let _option_v: string | null = null
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "data": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(_generateHandler_type_expression(
//                                                                                     (node) => _data_v = node
//                                                                                 )),
//                                                                             },
//                                                                             "option": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(context.expectQuotedString({
//                                                                                     warningOnly: true,
//                                                                                     callback: ($) => {
//                                                                                         _option_v = $.token.token.value
//                                                                                     },
//                                                                                 })),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             if (_data_v === null) {
//                                                                                 _data_v = {
//                                                                                     "strategy": ["literal", {
//                                                                                         "type": ["string", {
//                                                                                             "value": "",
//                                                                                         }],
//                                                                                     }],
//                                                                                 }
//                                                                             }
//                                                                             if (_option_v === null) {
//                                                                                 _option_v = "*option*"
//                                                                             }
//                                                                             callback({
//                                                                                 "data": _data_v,
//                                                                                 "option": _option_v,
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["tagged union", node]))
//                                                             },
//                                                             "type argument": () => {
//                                                                 return wrap(((callback: (out: t.__type_argument_type_T) => void) => {
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             callback({
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["type argument", node]))
//                                                             },
//                                                             "type reference": () => {
//                                                                 return wrap(((callback: (out: t.__type_reference_type_literal_T) => void) => {
//                                                                     let _expression_v: t.__type_expression_T | null = null
//                                                                     return context.expectVerboseGroup({
//                                                                         properties: {
//                                                                             "expression": {
//                                                                                 onNotExists: () => { /**/ },
//                                                                                 onExists: () => wrap(_generateHandler_type_expression(
//                                                                                     (node) => _expression_v = node
//                                                                                 )),
//                                                                             },
//                                                                         },
//                                                                         onEnd: () => {
//                                                                             if (_expression_v === null) {
//                                                                                 _expression_v = {
//                                                                                     "strategy": ["literal", {
//                                                                                         "type": ["string", {
//                                                                                             "value": "",
//                                                                                         }],
//                                                                                     }],
//                                                                                 }
//                                                                             }
//                                                                             callback({
//                                                                                 "expression": _expression_v,
//                                                                             })
//                                                                         },
//                                                                     })
//                                                                 })((node) => _type_v = ["type reference", node]))
//                                                             },
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_type_v === null) {
//                                                     _type_v = ["string", {
//                                                         "value": "",
//                                                     }]
//                                                 }
//                                                 callback({
//                                                     "type": _type_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _strategy_v = ["literal", node]))
//                                 },
//                                 "map": () => {
//                                     return wrap(((callback: (out: t.__map_T) => void) => {
//                                         let _context_v: t.__guaranteed_context_selection_T | null = null
//                                         let _entry_v: t.__type_expression_T | null = null
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "context": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_guaranteed_context_selection(
//                                                         (node) => _context_v = node
//                                                     )),
//                                                 },
//                                                 "entry": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_type_expression(
//                                                         (node) => _entry_v = node
//                                                     )),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_context_v === null) {
//                                                     _context_v = {
//                                                         "missing handler": {
//                                                             "guaranteed": ["yes", {
//                                                             }],
//                                                         },
//                                                         "start": {
//                                                             "start": ["context", {
//                                                             }],
//                                                         },
//                                                         "steps": pl.createArray([]),
//                                                     }
//                                                 }
//                                                 if (_entry_v === null) {
//                                                     _entry_v = {
//                                                         "strategy": ["literal", {
//                                                             "type": ["string", {
//                                                                 "value": "",
//                                                             }],
//                                                         }],
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "context": _context_v,
//                                                     "entry": _entry_v,
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _strategy_v = ["map", node]))
//                                 },
//                                 "switch": () => {
//                                     return wrap(((callback: (out: t.__switch_T) => void) => {
//                                         let _context_v: t.__guaranteed_context_selection_T | null = null
//                                         const _options_v: { [key: string]: t.__options_switch_T } = {}
//                                         return context.expectVerboseGroup({
//                                             properties: {
//                                                 "context": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(_generateHandler_guaranteed_context_selection(
//                                                         (node) => _context_v = node
//                                                     )),
//                                                 },
//                                                 "options": {
//                                                     onNotExists: () => { /**/ },
//                                                     onExists: () => wrap(context.expectDictionary({
//                                                         onProperty: (propertyData) => {
//                                                             return wrap(((callback: (out: t.__options_switch_T) => void) => {
//                                                                 let _expression_v: t.__type_expression_T | null = null
//                                                                 return context.expectVerboseGroup({
//                                                                     properties: {
//                                                                         "expression": {
//                                                                             onNotExists: () => { /**/ },
//                                                                             onExists: () => wrap(_generateHandler_type_expression(
//                                                                                 (node) => _expression_v = node
//                                                                             )),
//                                                                         },
//                                                                     },
//                                                                     onEnd: () => {
//                                                                         if (_expression_v === null) {
//                                                                             _expression_v = {
//                                                                                 "strategy": ["literal", {
//                                                                                     "type": ["string", {
//                                                                                         "value": "",
//                                                                                     }],
//                                                                                 }],
//                                                                             }
//                                                                         }
//                                                                         callback({
//                                                                             "expression": _expression_v,
//                                                                         })
//                                                                     },
//                                                                 })
//                                                             })((node) => _options_v[propertyData.token.token.value] = node))
//                                                         },
//                                                     })),
//                                                 },
//                                             },
//                                             onEnd: () => {
//                                                 if (_context_v === null) {
//                                                     _context_v = {
//                                                         "missing handler": {
//                                                             "guaranteed": ["yes", {
//                                                             }],
//                                                         },
//                                                         "start": {
//                                                             "start": ["context", {
//                                                             }],
//                                                         },
//                                                         "steps": pl.createArray([]),
//                                                     }
//                                                 }
//                                                 callback({
//                                                     "context": _context_v,
//                                                     "options": pl.createDictionary(_options_v),
//                                                 })
//                                             },
//                                         })
//                                     })((node) => _strategy_v = ["switch", node]))
//                                 },
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_strategy_v === null) {
//                         _strategy_v = ["literal", {
//                             "type": ["string", {
//                                 "value": "",
//                             }],
//                         }]
//                     }
//                     callback({
//                         "strategy": _strategy_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_type_expression_block(
//         callback: (out: t.__type_expression_block_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__type_expression_block_T) => void) => {
//             let _expression_v: t.__type_expression_T | null = null
//             const _functions_v: { [key: string]: t.__functions_type_expression_block_T } = {}
//             return context.expectVerboseGroup({
//                 properties: {
//                     "expression": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(_generateHandler_type_expression(
//                             (node) => _expression_v = node
//                         )),
//                     },
//                     "functions": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectDictionary({
//                             onProperty: (propertyData) => {
//                                 return wrap(((callback: (out: t.__functions_type_expression_block_T) => void) => {
//                                     let _block_v: t.__type_expression_block_T | null = null
//                                     let _declaration_v: t.__function_declaration_T | null = null
//                                     return context.expectVerboseGroup({
//                                         properties: {
//                                             "block": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(_generateHandler_type_expression_block(
//                                                     (node) => _block_v = node
//                                                 )),
//                                             },
//                                             "declaration": {
//                                                 onNotExists: () => { /**/ },
//                                                 onExists: () => wrap(_generateHandler_function_declaration(
//                                                     (node) => _declaration_v = node
//                                                 )),
//                                             },
//                                         },
//                                         onEnd: () => {
//                                             if (_block_v === null) {
//                                                 _block_v = {
//                                                     "expression": {
//                                                         "strategy": ["literal", {
//                                                             "type": ["string", {
//                                                                 "value": "",
//                                                             }],
//                                                         }],
//                                                     },
//                                                     "functions": pl.createDictionary({}),
//                                                 }
//                                             }
//                                             if (_declaration_v === null) {
//                                                 _declaration_v = {
//                                                     "in": {
//                                                         "namespace selection": {
//                                                             "which": ["current", {
//                                                             }],
//                                                         },
//                                                         "type": "*type reference*",
//                                                     },
//                                                     "out": {
//                                                         "namespace selection": {
//                                                             "which": ["current", {
//                                                             }],
//                                                         },
//                                                         "type": "*type reference*",
//                                                     },
//                                                 }
//                                             }
//                                             callback({
//                                                 "block": _block_v,
//                                                 "declaration": _declaration_v,
//                                             })
//                                         },
//                                     })
//                                 })((node) => _functions_v[propertyData.token.token.value] = node))
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_expression_v === null) {
//                         _expression_v = {
//                             "strategy": ["literal", {
//                                 "type": ["string", {
//                                     "value": "",
//                                 }],
//                             }],
//                         }
//                     }
//                     callback({
//                         "expression": _expression_v,
//                         "functions": pl.createDictionary(_functions_v),
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     function _generateHandler_type_reference(
//         callback: (out: t.__type_reference_T) => void,
//     ): h.IValueHandler<TokenAnnotation> {
//         return ((callback: (out: t.__type_reference_T) => void) => {
//             let _namespace_selection_v: t.__namespace_selection_T | null = null
//             let _type_v: string | null = null
//             return context.expectVerboseGroup({
//                 properties: {
//                     "namespace selection": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(_generateHandler_namespace_selection(
//                             (node) => _namespace_selection_v = node
//                         )),
//                     },
//                     "type": {
//                         onNotExists: () => { /**/ },
//                         onExists: () => wrap(context.expectQuotedString({
//                             warningOnly: true,
//                             callback: ($) => {
//                                 _type_v = $.token.token.value
//                             },
//                         })),
//                     },
//                 },
//                 onEnd: () => {
//                     if (_namespace_selection_v === null) {
//                         _namespace_selection_v = {
//                             "which": ["current", {
//                             }],
//                         }
//                     }
//                     if (_type_v === null) {
//                         _type_v = "*type reference*"
//                     }
//                     callback({
//                         "namespace selection": _namespace_selection_v,
//                         "type": _type_v,
//                     })
//                 },
//             })
//         })((node) => callback(node))
//     }

//     return wrap(_generateHandler_root(callback))
// }
